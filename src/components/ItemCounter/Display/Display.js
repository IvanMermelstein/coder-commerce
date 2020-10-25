import React from 'react'

const Display = (props) => {

    const display = {
        height: 40,
        width: 60,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        fontSize: '1.75rem',
        borderRadius: 10,
        color: props.exceeded ? '#b4000f' : '#202020',
        marginTop: '4px'
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
