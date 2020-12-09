import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Button = (props) => {
    
    let sign = props.add ?  <AddIcon /> : <RemoveIcon />  
    let amount = props.add ? (props.counter + 1) : (props.counter - 1)

    return (
        <>
            <IconButton 
                onClick={props.onClick(amount)}
                color='secondary'
            >
                {sign}
            </IconButton>
        </>
    )
}

export default Button
