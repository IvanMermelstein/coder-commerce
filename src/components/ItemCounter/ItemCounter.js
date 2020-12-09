import React, {useState} from 'react'
import Add from './Add/Add'
import Button from './Button/Button'
import Display from './Display/Display'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
    root: {
        width: 200,
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center'
    },
});

const ItemCounter = (props) => {

    const [counter, setCounter] = useState(props.initial)
    const [exceeded, setExceeded] = useState(false)

    const classes = useStyles();

    const handleClick = (amount) => {
        return () => {
            let total = (amount < 0) ? 0 : amount
            let limit = (props.stock < total) ? props.stock : total
            setCounter(limit)
            setExceeded(((props.stock - 1) < total) || (total === 0))
        }
    }

    return (
        <>
            <Card className={classes.root} >
                <CardActions>
                    <Button add={false} onClick={handleClick} counter={counter} />
                    <Display counter={counter} exceeded={exceeded} />
                    <Button add={true} onClick={handleClick} counter={counter} />
                </CardActions>
                <CardActions>
                    <Add onAdd={props.onAdd} counter={[counter, setCounter]} text="Agregar"/>
                </CardActions>
            </Card>
        </>
    )
}

export default ItemCounter
