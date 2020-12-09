import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: '25px'
    },
}));

const CartWidget = ({ count }) => {
    
    const classes = useStyles()

    return (
        <Tooltip title="Termina tu compra!">
            <Button 
                className={classes.root}
                component={Link} 
                to={`/cart`} 
                disableRipple
            >
                <Badge badgeContent={count} color="secondary" >
                    <ShoppingCartIcon />
                </Badge>
            </Button>
        </Tooltip>
    )
}

export default CartWidget
