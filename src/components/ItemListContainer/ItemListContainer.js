import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    const [itemsArr, setItemsArr] = useState([])

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            resolve(
                setTimeout(() => {
                    setItemsArr( [
                        {
                            id: 1,
                            title: 'Pizza Pi',
                            price: 1.35,
                            pictureUrl: "https://www.dummyurl.com/pizzapi"
                        },
                        {
                            id: 2,
                            title: 'Pizza Delta',
                            price: 2.15,
                            pictureUrl: "https://www.dummyurl.com/pizzadelta"
                        }
                    ])
                }, 2000)
            )
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
