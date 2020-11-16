import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
// import ItemCounter from '../ItemCounter/ItemCounter'
import { useParams } from 'react-router-dom' 
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {

    const {id} = useParams()

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

    return (
        <>
        {mount === true ?
            <div className="ItemDetailContainer">
                <ItemDetail 
                    item={item}
                />
            </div>
            :
            <Loader/>
        }
        </>
    )
}

export default ItemDetailContainer
