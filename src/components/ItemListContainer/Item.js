import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <li key={props.item.id} className="item">
            <img src={props.item.pictureUrl} alt=""/>
            <h3>{props.item.title}</h3>
            <h4>{props.item.price}</h4>    
        </li>
    )
}

export default Item
