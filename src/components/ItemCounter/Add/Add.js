import React from 'react'
import './Add.css'

const Add = (props) => {

    return (
        <>
            <div className="add" onClick={props.onAdd(props.counter)}>
                Agregar
            </div>
        </>
    )
}

export default Add
