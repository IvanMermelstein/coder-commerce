import React from 'react'

const Display = (props) => {

    const display = {
        height: 50,
        width: 100,
        backgroundColor: 'white',
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        fontSize: '2rem',
        borderRadius: 10,
        color: props.exceeded ? 'red' : 'black',
    }

    return (
        <>
            <div className="display" style={display}>
                {props.counter}
            </div>
        </>
    )
}

export default Display
