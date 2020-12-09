import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        '& > *': {
            marginLeft: '20px',
            marginTop: '15px',
            width: '100ch',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
        },
    buyButton: {
        marginLeft: '20px',
        marginTop: '10px',
        width: '100ch',
    }
    },
});

const Form = ({createOrder, cart}) => {

    const {finished} = useCartContext()
    
    const [buyer, setBuyer] = useState({})
    const [isValidated, setIsValidated] = useState(true)
    const [secondMail, setSecondMail] = useState('')

    const classes = useStyles();

    useEffect(() => {
        if (buyer.name && buyer.lastName && buyer.phone && buyer.email && buyer.email === secondMail) {
            setIsValidated(false)
        } else {
            setIsValidated(true)
        }
    }, [buyer, secondMail])

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label="Nombre" variant="outlined" color='secondary' onChange={evt => setBuyer({...buyer, name: evt.target.value})} />
                <TextField label="Apellido" variant="outlined" color='secondary' onChange={evt => setBuyer({...buyer, lastName: evt.target.value})} />
                <TextField label="Telefono" variant="outlined" color='secondary' onChange={evt => setBuyer({...buyer, phone: evt.target.value})} />
                <TextField label="Mail" variant="outlined" color='secondary' onChange={evt => setBuyer({...buyer, email: evt.target.value})} />
                <TextField label="Repetir Mail" variant="outlined" color='secondary' onChange={evt => setSecondMail(evt.target.value)} />
                <Button 
                    onClick={() => createOrder(cart, buyer)}
                    variant="contained" 
                    color='secondary'
                    disabled={isValidated || finished}
                    className={classes.buyButton}
                >
                    Terminar compra
                </Button>
            </form>
        </>
    );
}

export default Form
