import React from 'react'


const Button = (props) => {
    
    let buttonStyle = {
        width: 50,
        height: 50,
        margin: 0, 
        textAlign: 'center',
        border: '2px solid black',
        padding: 'auto',
        cursor: 'pointer',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20,
        fontSize: '2rem'
    }
    
    let sign = props.add ? '+' : '-'
    let amount = props.add ? (props.counter + 1) : (props.counter - 1)

    return (

        <>
            <div className="button" style={buttonStyle} onClick={props.handleClick(amount)}>
                {sign}
            </div>
        </>
    )
}

export default Button
