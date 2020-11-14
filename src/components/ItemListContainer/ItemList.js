import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = (props) => {
    return (
        <ul className="item-list">
            {props.itemsArr.map(item => 
                <Item key={item.id} item={item} /> 
            )}
        </ul>
    )
}

export default ItemList
