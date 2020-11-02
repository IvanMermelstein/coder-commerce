import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    const [itemsArr, setItemsArr] = useState([])

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
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://via.placeholder.com/270x175.png"
                        },
                        {
                            id: 2,
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
        getItems().then(items => {
            setItemsArr(items)
        })
    }, [])

    return (
        <div className="div-container">
            <h1 className="title">{props.title}</h1>
            <ItemList itemsArr={itemsArr}/>
        </div>
    )
}

export default ItemListContainer
