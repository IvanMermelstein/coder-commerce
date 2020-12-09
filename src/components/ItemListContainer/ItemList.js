import React from 'react'
import Item from './Item'
import Grid from '@material-ui/core/Grid';

const ItemList = (props) => {

    return (
        <Grid item xs={12} style={{marginTop: '40px'}}>
            <Grid container justify="center" spacing={8}>
                {props.itemsArr.map(item => 
                    <Grid key={item.id} item>
                        <Item key={item.id} item={item} /> 
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default ItemList
