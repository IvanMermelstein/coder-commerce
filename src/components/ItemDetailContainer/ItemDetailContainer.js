import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom' 
import { getFirestore } from '../../firebase'
import Grid from '@material-ui/core/Grid';
import ItemDetailNoItem from './ItemDetailNoItem'

const ItemDetailContainer = (props) => {

    const {id} = useParams()

    const [item, setItem] = useState({})
    const [mount, setMount] = useState(false)
    const [noItem, setNoItem] = useState(false)

    useEffect(() => {

        let mounted = true
        if (!item.exists) {
            const db = getFirestore()
            const itemCollection = db.collection('items')
            const item = itemCollection.doc(id)
    
            item.get().then((doc) => {
                
                if (!doc.exists) {
                    setNoItem(true)
                    return
                }
             if (mounted){   
                setItem({ id: doc.id, ...doc.data() })
                setMount(true)}
            })

        }
        return () => mounted = false
        
    }, [id, item])

    return (
        <>
        {mount === true ?
            <Grid item xs={12} style={{marginTop: '40px'}}>
                <Grid container justify="center" >
                        <Grid key={item.id} item>
                            <ItemDetail item={item} /> 
                        </Grid>
                </Grid>
            </Grid>
            :(
                noItem ? <ItemDetailNoItem /> : <Loader/>
            )
        }
        </>
    )
}

export default ItemDetailContainer

