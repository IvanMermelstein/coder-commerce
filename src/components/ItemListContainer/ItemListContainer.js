import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className="div-container">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default ItemListContainer
