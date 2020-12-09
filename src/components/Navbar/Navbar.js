import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useCartContext } from '../../context/cartContext'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        marginLeft: '25px'
    },
    titleContainer: {
        flexGrow: 1,
    },
    menuIcon: {
        marginTop: '0px'
    },
    offset: theme.mixins.toolbar,
}));

function Navbar() {
    
    const { cart, totalCount } = useCartContext()    
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(() => totalCount())
    }, [cart, totalCount])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className={classes.titleContainer} >
                        <Typography 
                            variant='h5' 
                            component={Link} 
                            to='/' 
                            color='secondary'
                            className={classes.title}
                        >
                            πzza
                            <LocalPizzaIcon color='secondary' className={classes.menuIcon} fontSize='small' />
                        </Typography>
                    </div>
                    {
                        count > 0 &&
                        <CartWidget count={count}/>
                    }            
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    )
}

export default Navbar
