import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Loader from '../Loader/Loader'
import './ItemListContainer.css'
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom' 

const ItemListContainer = (props) => {

    const [itemsArr, setItemsArr] = useState([])
    const [load, setLoad] = useState(true)
    const { categoryId } = useParams()

    // const getItems = () => {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //                 res([
    //                     {
    //                         id: 1,
    //                         title: 'Pizza Pi',
    //                         price: 1.35,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 6,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     },
    //                     {
    //                         id: 7,
    //                         title: 'Pizza Delta',
    //                         price: 2.15,
    //                         pictureUrl: "https://via.placeholder.com/270x175.png"
    //                     }
    //                 ])
    //                 rej('fail')
    //         }, 2000)                
    //     })
    // }

    useEffect(() => {

        const db = getFirestore()
        let itemCollection = db.collection('items')
        // const itemsByCategoryId = itemCollection.where('categoryId', '==', categoryId)

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

        // getItems().then(items => {
        //     setItemsArr(items)
        //     setLoad(false)
        // })

    }, [categoryId])

    return (
        <div className="div-container">
            <h1 className="title">{props.title}</h1>
            { load === true ? <Loader /> :
                              <ItemList itemsArr={itemsArr}/>
            }
        </div>
    )
}

export default ItemListContainer
