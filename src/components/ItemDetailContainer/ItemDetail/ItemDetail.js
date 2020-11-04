import React, { useState, useEffect } from 'react'
import './ItemDetail.css'

const ItemDetail = (props) => {

    const [item, setItem] = useState({})
    
    useEffect(() => {
        console.log('props.item =', props.item)
        console.log('item = ', item)
        setItem(props.item)    
    }, [props, item])
    
    console.log('itemDetail = ' + item)
    return (
        <div className="itemDetail">
            <img src={item.pictureUrl} alt=""/>
            <h4>{item.title}</h4>
            <h6>{item.description}</h6>
            <h6>{item.price}</h6>
        </div>
    )
}

export default ItemDetail
