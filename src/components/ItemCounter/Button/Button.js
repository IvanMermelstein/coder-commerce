import React from 'react'


const Button = (props) => {
    
    let buttonStyle = {
        paddingTop: '8px'
    }

    let iStyle = {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        color: 'white'   
    }
    
    let sign = props.add ?  <i className="fas fa-plus-circle fa-2x" style={iStyle}></i> 
                            : 
                            <i className="fas fa-minus-circle fa-2x" style={iStyle}></i>
    let amount = props.add ? (props.counter + 1) : (props.counter - 1)

    return (
        <>
            <div 
                className="button" 
                style={buttonStyle} 
                onClick={props.handleClick(amount)}
            >
                {sign}
            </div>
        </>
    )
}

export default Button
