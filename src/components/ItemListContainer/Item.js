import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: { 
        width: 270,
    },
     media: {
        height: 175,
    },
});

const Item = (props) => {

    const classes = useStyles();

    return (
        <Link to={`/item/${props.item.id}`} style={{textDecoration:'none'}} >  
            <Card className={classes.root}>
                <CardActionArea>
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
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default Item