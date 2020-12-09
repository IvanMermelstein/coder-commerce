import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import { useCartContext } from '../../context/cartContext'

const useStyles = makeStyles({
    table: {
        width: '700px',
        marginTop: '10px',
        marginLeft: '50px'
    },
    headerText: {
        color: 'secondary'
    }
});

const CartItemContainer = ({cart, totalPrice}) => {
    
    const classes = useStyles();
    const { remove, finished } = useCartContext()    

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="simple table">
                <caption>Total: ${totalPrice}</caption>
                <TableHead>
                    <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Borrar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map(item => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">{item.title}</TableCell>
                            <TableCell align="right">{item.count}</TableCell>
                            <TableCell align="right">${item.price}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => remove(item.id)} disabled={finished} >
                                    <DeleteIcon color='secondary' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartItemContainer
