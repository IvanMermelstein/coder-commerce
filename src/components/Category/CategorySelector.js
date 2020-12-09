import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firebase'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: '15px',
        width: '210px',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));

const CategorySelector = () => {

    const classes = useStyles();

    const [categoriesArr, setCategoriesArr] = useState([])
    const [categorySelected, setCategorySelected] = useState('')

    useEffect(() => {

        const db = getFirestore()
        let categoryCollection = db.collection('categories')

        categoryCollection.get().then((querySnapshot) => {
            
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            
            setCategoriesArr(
                querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
            )

        })

    }, [])

    const handleChange = (evt) => {
        setCategorySelected(evt.target.value)
    };

    return (
        <FormControl 
            className={classes.formControl} 
            color='secondary'
        >
            <InputLabel>Categorias</InputLabel>
            <Select value={categorySelected} onChange={handleChange}>
                <MenuItem 
                    value=""
                    component={Link} 
                    to={`/`}
                >
                    <em>Todo</em>
                </MenuItem>
                {                
                    categoriesArr.map(category => 
                            <MenuItem 
                                value={category.id} 
                                component={Link} 
                                to={`/${category.id}`}
                                key={category.id} 
                            >
                                {category.description}
                            </MenuItem>
                    )
                }                
            </Select>
        </FormControl>
    )
}

export default CategorySelector
