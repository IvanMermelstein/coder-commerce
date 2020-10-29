import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = (props) => {
    return (
        <ul className="item-list">
            {props.itemsArr.map(item => 
                <Item item={item} /> 
            )}
        </ul>
    )
}

export default ItemList
