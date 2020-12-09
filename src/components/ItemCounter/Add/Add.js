import React from 'react'
import Button from '@material-ui/core/Button'

const Add = (props) => {

    return (
        <>
            <Button 
                onClick={props.onAdd(props.counter)}
                color='secondary'
                variant='contained'
            >
                {props.text}
            </Button>
        </>
    )
}

export default Add
