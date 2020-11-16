import React from 'react'
import { Link } from 'react-router-dom'

const CartItemNone = () => {
    return (
        <>
            <h3>No items in your cart</h3>   
            <Link to='/'>
                <button>You should click me</button>
            </Link>
        </>
    )
}

export default CartItemNone
