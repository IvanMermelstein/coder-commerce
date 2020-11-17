import React from 'react'
import { useCartContext } from '../../context/cartContext'

const CartItem = ({item}) => {

    const { remove } = useCartContext()    

    return (
        <>
            <li>
                {item.title} - $ {item.price} x {item.count} 
                <button onClick={() => remove(item.id)} style={{marginLeft:'5px'}}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </li>
        </>
    )
}

export default CartItem


