import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        marginTop:'15px'
    },
});

const BackToHome = () => {

    const classes = useStyles()

    return (
        <Link to='/' className={classes.link} >
            <Typography 
                color='secondary'
                variant='subtitle2'
            >
                Volver al inicio
            </Typography>
        </Link> 
    )
}

export default BackToHome
