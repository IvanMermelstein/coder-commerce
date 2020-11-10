import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useCartContext } from '../../../context/cartContext'
import ItemCounter from '../../ItemCounter/ItemCounter'
import './ItemDetail.css'

const ItemDetail = (props) => {

    // const {add} = useCartContext()
    // importar el cartContext ->
    // function ondAdd(qty) {
    //     console.log(`adding ${qty}`)
    // }

    const available = 20
    const initial = 0

    const [stock, setStock] = useState(available)
    const [cart, setCart] = useState(0)
    const [displayCount, setDisplayCount] = useState(true)

    const handleAdd = ([counter, setCounter]) => {
        return () => {
            if(stock > 0) {
                let left = stock - counter
                setCart(counter + cart)
                setStock(left)
                setCounter((initial > left) ? left : initial)
                if (counter > 0) {
                    setDisplayCount(!displayCount)
                }                
            } else {
                alert('Sin stock!')
            }
        }
    }

    return (
        <>
            <div className="itemDetail">
                <img src={props.item.pictureUrl} alt=""/>
                <h4>{props.item.title}</h4>
                <h6>{props.item.description}</h6>
                <h6>{props.item.price}</h6>
            </div>

            {
                displayCount && 
                <ItemCounter 
                        onAdd={handleAdd}
                        stock={stock}
                        initial={initial}
                    />
            }

            {
                !displayCount &&
                <Link to='/cart' className="finishButtonLink">
                    <button className="finishButton">Termina tu compra</button>
                </Link>
            }
        </>
    )
}

export default ItemDetail
