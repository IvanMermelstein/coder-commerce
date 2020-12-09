import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/cartContext'
import ItemCounter from '../../ItemCounter/ItemCounter'
import ItemDetailCard from '../ItemDetailCard'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import BackToHome from '../../BackToHome/BackToHome'

const useStyles = makeStyles({
    root: {
        width: 200,
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    link: {
        textDecoration: 'none',
        marginTop:'15px'
    },
});

const ItemDetail = (props) => {

    const classes = useStyles()

    const {add} = useCartContext()

    const available = 20
    const initial = 0

    const [stock, setStock] = useState(available)
    const [cart, setCart] = useState(0)
    const [displayCount, setDisplayCount] = useState(true)
    const [item, setItem] = useState({
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
        pictureUrl: props.item.pictureUrl,
        description: props.item.description
    })
    
    const handleAdd = ([counter, setCounter]) => {

        return () => {
            if(stock > 0) {
                let left = stock - counter
                setCart(counter + cart)
                setStock(left)
                setCounter((initial > left) ? left : initial)
                if (counter > 0) {
                    setDisplayCount(!displayCount)
                    item.count = counter
                    setItem(item)  
                    add(item)   
                }
            } else {
                alert('Sin stock!')
            }
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ItemDetailCard item={item} />
            {
                displayCount ?
                <ItemCounter 
                        onAdd={handleAdd}
                        stock={stock}
                        initial={initial}
                /> :
                <div className={classes.root}>
                    <Link to='/cart' className={classes.link} >
                        <Button 
                            color='secondary'
                            variant='contained'
                        >
                            Termina tu compra
                        </Button>
                    </Link> 
                    <BackToHome />
                </div>
            }
        </div>
    )
}

export default ItemDetail


