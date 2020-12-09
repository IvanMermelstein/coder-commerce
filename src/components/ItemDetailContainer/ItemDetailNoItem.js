import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackToHome from '../BackToHome/BackToHome';

const useStyles = makeStyles({
    text: {
        marginTop: '35px',
        marginLeft: '50px',
    },
});

const ItemDetailNoItem = () => {
    
    const classes = useStyles()

    return (
        <div className={classes.text} >
            <Typography 
                variant='subtitle1'
            >
                El item no existe
            </Typography>   
            <BackToHome />
        </div>
    )
}

export default ItemDetailNoItem
