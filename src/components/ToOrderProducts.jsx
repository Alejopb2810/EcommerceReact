import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../store/slices/products.slice'
import './styles/toOrderProducts.css'

const ToOrderProducts = () => {
    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingOrderProducts())
    }

    const handleDescending = () => {
        dispatch(descendingOrderProducts())
    }
    return (
        <div className='order-container'>
            <button className='order__buttonA' onClick={handleAscending}>Ascending Order</button>
            <button className='order__buttonD' onClick={handleDescending}>Descending Order</button>
        </div>
    )
}

export default ToOrderProducts