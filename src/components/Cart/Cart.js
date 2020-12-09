import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'
import { getFirestore } from '../../firebase'
import CartItemContainer from './CartItemContainer'
import CartItemNone from './CartItemNone'
import BackToHome from '../BackToHome/BackToHome'
import Form from './Form'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const useStyles = makeStyles({
    buyButton: {
        marginLeft: '50px',
        marginTop: '15px'
    },
    backToHome: {
        marginTop: '10px'
    },
    container: {
        display: 'flex'
    },
    column: {
        flexDirection: 'column'
    }
});

const Cart = () => {

    const classes = useStyles();
    const history = useHistory();

    const {cart, totalPrice, finish, clear} = useCartContext()
    const [loadCart, setLoadCart] = useState(false)
    const [formDisplay, setFormDisplay] = useState(false)
    const [buyButtonDisplay, setBuyButtonDisplay] = useState(false)
    const [buyIdDisplay, setBuyIdDisplay] = useState(null)

    useEffect(() => {
        if (cart.length > 0) {
            setLoadCart(true)
            setBuyButtonDisplay(true)
        } else {
            setLoadCart(false)
            setBuyButtonDisplay(false)
        }
    }, [cart])

    async function createOrder(cart, buyer) {

        const newOrder = {
            buyer: buyer,
            items: [...cart],
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice(),
        };

        const db = getFirestore()
        const orders = db.collection('orders')
        
        try {

            const buyId = await orders.add(newOrder)

            const itemQueryByManyId = await db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(item => item.id))
            .get();
        
            const [...items] = itemQueryByManyId.docs;
            
            await items.map(item => (
                item.ref.update({ stock: item.data().stock - cart.find(cartItem => {return cartItem.id === item.id}).count })
            ))
        
            finish()
            setBuyIdDisplay(buyId.id)

        } catch (err) {
            console.log('Error creating order', err)
        }
        
    }

    function handleButtonClick () {
        setBuyButtonDisplay(false)
        setFormDisplay(true)
    }

    function handleClose () {
        setBuyIdDisplay(null)
        setFormDisplay(false)
        clear()
        history.push('/')
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div className={classes.container}>
            <div className={classes.column}>
            {
                loadCart ?  <CartItemContainer cart={cart} totalPrice={totalPrice()}/> :
                            <CartItemNone />
            }
            {
                buyButtonDisplay && 
                <div className={classes.buyButton}>
                    <Button 
                        variant='contained' 
                        color='secondary'
                        onClick={handleButtonClick}
                        fullWidth
                    >
                        Confirmar
                    </Button>
                    <div className={classes.backToHome}>
                        <BackToHome />
                    </div>   
                </div>
            }
            </div>
            <div className={classes.column}>
            {
                formDisplay && <Form createOrder={createOrder} cart={cart}/>
            }
            </div>
            <Snackbar open={buyIdDisplay} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="success">
                    Su compra fue confirmada con el ID: {buyIdDisplay}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Cart
