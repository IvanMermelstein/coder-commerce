import React from 'react'
import { Link } from 'react-router-dom'

const CartItemNone = () => {
    return (
        <>
            <h3>El carrito esta vacio</h3>   
            <Link to='/'>
                <button>Volver al Inicio</button>
            </Link>
        </>
    )
}

export default CartItemNone
