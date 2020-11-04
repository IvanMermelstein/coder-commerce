import React from 'react'
import './ItemDetail.css'

const ItemDetail = (props) => {

    return (
        <div className="itemDetail">
            <img src={props.item.pictureUrl} alt=""/>
            <h4>{props.item.title}</h4>
            <h6>{props.item.description}</h6>
            <h6>{props.item.price}</h6>
        </div>
    )
}

export default ItemDetail
