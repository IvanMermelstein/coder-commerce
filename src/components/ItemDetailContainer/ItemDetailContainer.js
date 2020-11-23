import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom' 
import './ItemDetailContainer.css'
import { getFirestore } from '../../firebase'

const ItemDetailContainer = (props) => {

    const {id} = useParams()

    const [item, setItem] = useState({})
    const [mount, setMount] = useState(false)

    useEffect(() => {

        let mounted = true
        if (!item.exists) {
            const db = getFirestore()
            const itemCollection = db.collection('items')
            const item = itemCollection.doc(id)
    
            item.get().then((doc) => {
                
                if (!doc.exists) {
                    console.log('No results')
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
            <div className="ItemDetailContainer">
                <ItemDetail 
                    item={item}
                />
            </div>
            :
            <Loader/>
        }
        </>
    )
}

export default ItemDetailContainer
