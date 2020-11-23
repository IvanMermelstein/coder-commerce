import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'
import { getFirestore } from '../../firebase'
import CartItemContainer from './CartItemContainer'
import CartItemNone from './CartItemNone'
import Form from './Form'
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const Cart = () => {

    const {cart, totalPrice} = useCartContext()
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
        
            setBuyIdDisplay(buyId.id)
            console.log('buyId:', buyId.id)

        } catch (err) {
            console.log('Error creating order', err)
        }
        
    }

    function handleButtonClick () {
        setBuyButtonDisplay(false)
        setFormDisplay(true)
    }

    return (
        <>
            <h2 style={{marginTop: "100px"}}>
                Compra
            </h2>    
            {
                loadCart ?  <CartItemContainer cart={cart} totalPrice={totalPrice}/> :
                            <CartItemNone />
            }
            {
                buyButtonDisplay && <button onClick={handleButtonClick}>Comprar</button>   
            }
            {
                formDisplay && <Form createOrder={createOrder} cart={cart}/>
            }
            {
                buyIdDisplay && <p>Su compra fue confirmada con el ID: {buyIdDisplay}</p>
            }
        </>
    )
}

export default Cart
