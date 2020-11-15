import React from 'react'

const CartWidget = ({ count }) => {
    
    return (
        <>
            <><i className='fas fa-shopping-cart'></i>
            <span style={{marginLeft: '10px'}}>{count}</span></> 
        </>
    )
}

export default CartWidget
