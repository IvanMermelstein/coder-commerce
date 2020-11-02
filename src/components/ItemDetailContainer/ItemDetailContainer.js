import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {

    const available = 20
    const initial = 5

    const [stock, setStock] = useState(available)
    const [cart, setCart] = useState(0)

    const handleAdd = ([counter, setCounter]) => {
        return () => {
            if(stock > 0) {
                let left = stock - counter
                setCart(counter + cart)
                setStock(left)
                setCounter((initial > left) ? left : initial)
            } else {
                alert('Sin stock!')
            }
        }
    }

    const [item, setItem] = useState([])

    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                    res(
                        {
                            id: 1,
                            title: 'Pizza Pi',
                            description: 'Esta es la pizza pi!',
                            price: 1.35,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        }
                    )
                    rej('fail')
            }, 2000)                
        })
    }

    useEffect(() => {
        getItem().then(item => {
            setItem(item)
        })
    }, [])


    // const info = {
    //     width: '100%',
    //     marginTop: 100,
    //     textAlign: 'center'
    // }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail 
                item={item}
            />

            {/* <div 
                className="info" 
                style={info}
            >
                <h3>Disponibles: {stock}</h3>
                <h3>Inicial: {initial}</h3>
                <h3>Carrito: {cart}</h3>
            </div> */}

            <ItemCounter 
                onAdd={handleAdd}
                stock={stock}
                initial={initial}
            />
        </div>
    )
}

export default ItemDetailContainer
