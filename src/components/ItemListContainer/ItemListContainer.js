import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Loader from '../Loader/Loader'
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom' 
import Container from '@material-ui/core/Container'
import CategorySelector from '../Category/CategorySelector'

const ItemListContainer = (props) => {

    const [itemsArr, setItemsArr] = useState([])
    const [load, setLoad] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        const db = getFirestore()
        let itemCollection = db.collection('items')

        if (categoryId) {
            itemCollection = itemCollection.where('categoryId', '==', categoryId)
        }

        itemCollection.get().then((querySnapshot) => {
            
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            
            setItemsArr(
                querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
            )

            setLoad(false)
        })

    }, [categoryId])

    return (
        <>
        <Container>            
            { 
                load === true ? 
                    <Loader /> :
                    <>
                        <CategorySelector />
                        <ItemList itemsArr={itemsArr} />
                    </>   
            }
        </Container>
        </>
    )
}

export default ItemListContainer
