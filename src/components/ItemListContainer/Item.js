import React from 'react'

const Item = (props) => {
    return (
        <li key={props.item.id}>
            {props.item.id} - {props.item.title} - {props.item.price} - {props.item.pictureUrl}
        </li>
    )
}

export default Item
