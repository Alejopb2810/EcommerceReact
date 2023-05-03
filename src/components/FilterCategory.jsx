import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../store/slices/products.slice'
import './styles/filterCategories.css'

const FilterCategory = ({ setInputValue }) => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleClick = id => {
        dispatch(getProductsByCategory(id))
        setInputValue("")
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts())
        setInputValue("")
    }

    return (
        <section className='categories-filter'>
            <h3 className='categories__title'>Filter Categories</h3>
            <ul className='categories__list'>
                <li className='categories__all' onClick={handleAllProducts}>All products</li>
                {
                    categories?.map(category => (
                        <li className='categories__items' onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FilterCategory