import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
import { useParams } from 'react-router-dom' 
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

    const {id} = useParams()
    // useEffect(() => {
    //     console.log(id)    
    // }, [id])

    const [item, setItem] = useState({})
    const [itemsArr, setItemsArr] = useState([])
    const [mount, setMount] = useState(false)

    const getItems = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                    res([
                        {
                            id: 1,
                            title: 'Pizza Pi',
                            price: 1.35,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 3,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 4,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 5,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 6,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 7,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        }
                    ])
                    rej('fail')
            }, 2000)                
        })
    }

    useEffect(() => {

        if (itemsArr.length === 0){
            getItems().then(items => {
                setItemsArr(items)
            })            
        }

        const arrAux = itemsArr.filter(item => item.id.toString() === id)
        if (arrAux[0]){
           setItem(arrAux[0]) 
           setMount(true)
        }

    }, [id, itemsArr])

    // const info = {
    //     width: '100%',
    //     marginTop: 100,
    //     textAlign: 'center'
    // }
    console.log('itemDetailContainer: ', item)
    return (
        <>
        {mount && 
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
            </div>}
        </>
    )
}

export default ItemDetailContainer
