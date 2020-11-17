import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <li className="item">
            <Link 
                to={`/item/${props.item.id}`} 
                style={{textDecoration:'none'}}
            >
                <img src={props.item.pictureUrl} alt=""/>
                <h3>{props.item.title}</h3>
                <h4>{props.item.price}</h4>
            </Link>
        </li>
    )
}

export default Item
