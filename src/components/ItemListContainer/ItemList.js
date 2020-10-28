import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <ul>
            {props.itemsArr.map(item => 
                <Item item={item} /> 
            )}
        </ul>
    )
}

export default ItemList
