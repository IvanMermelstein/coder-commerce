import React from 'react'
import './Add.css'

const Add = (props) => {

    return (
        <>
            <div className="add" onClick={props.onAdd(props.counter)}>
                {props.text}
            </div>
        </>
    )
}

export default Add
