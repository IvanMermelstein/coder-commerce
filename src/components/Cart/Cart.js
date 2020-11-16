import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'
import CartItemContainer from './CartItemContainer'
import CartItemNone from './CartItemNone'

const Cart = () => {

    const {cart, totalPrice} = useCartContext()
    const [loadCart, setLoadCart] = useState(false)

    useEffect(() => {
        if (cart.length > 0) {
            setLoadCart(true)
        } else {
            setLoadCart(false)
        }
    }, [cart])

    return (
        <>
            <h2 style={{marginTop: "100px"}}>
                I'm a Cart component
            </h2>    
            {
                loadCart ? <CartItemContainer cart={cart} totalPrice={totalPrice}/> :
                           <CartItemNone />
            }
        </>
    )
}

export default Cart
