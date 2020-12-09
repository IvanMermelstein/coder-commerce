import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        width: 540,
    },
    media: {
        height: 350,
    },
});

const ItemDetailCard = (props) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.item.pictureUrl}
                title={props.item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >
                    {props.item.title}
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                    ${props.item.price}
                </Typography>
                <Typography variant="body2" component="p" style={{marginTop: '10px'}} color='textSecondary'>
                    {props.item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ItemDetailCard
