import React from 'react'
import CartItem from './CartItem'

const CartItemContainer = ({cart, totalPrice}) => {
    return (
        <>
            <ul>
                {cart.map(item => 
                    <CartItem key={item.id} item={item} /> 
                )}
            </ul>
            <h3>Total: $ {totalPrice()}</h3>
        </>
    )
}

export default CartItemContainer
