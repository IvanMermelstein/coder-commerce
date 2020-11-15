import React from 'react'
import { useCartContext } from '../../context/cartContext'

const Cart = () => {

    const {cart} = useCartContext()
    console.log('Cart - cart:', cart)

    return (
        <>
            <h2 style={{marginTop: "100px"}}>
                Maybe sometime I'll be a cart
            </h2>    
        </>
    )
}

export default Cart
