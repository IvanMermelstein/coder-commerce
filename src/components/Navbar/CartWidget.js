import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
            <Link to='/cart' className='nav-links'>
                Carrito
                <br />
                <i className='fas fa-shopping-cart'></i>                                                        
            </Link>
        </>
    )
}

export default CartWidget
