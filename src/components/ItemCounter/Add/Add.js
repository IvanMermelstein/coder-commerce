import React from 'react'

const Add = (props) => {

    const add = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'red',
        padding: 20,
        border: '2px solid black',
        color: 'white',
        height: 10,
        borderRadius: 10
    }

    return (
        <>
            <div className="add" style={add} onClick={props.onAdd}>
                Agregar
            </div>
        </>
    )
}

export default Add
