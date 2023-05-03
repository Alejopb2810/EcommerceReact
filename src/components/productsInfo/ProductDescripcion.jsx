import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../Utils/getConfig'
import { getUserCart } from '../../store/slices/cart.slice'
import './styles/productDescription.css'

const ProductDescripcion = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [counter, setCounter] = useState(1)

    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleCart = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => {
                if (err.response.status === 400) {
                    const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
                    const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
                    const data = {
                        id: product.id,
                        newQuantity: prevQuantity + counter
                    }
                    axios.patch(URLPatch, data, getConfig())
                        .then(res => {
                            console.log(res.data)
                            dispatch(getUserCart())
                        })
                        .catch(err => console.log(err))
                }
            })
    }

    return (
        <div className="info__main">
        <div className='info__body'>
            <h2 className='info__title'>{product?.title}</h2>
            <p className='info__paragraph'>{product?.description}</p>
            <div className='info__aditional'>
                <div className='info__price'>
                <span className='info__span'>Price: </span>
                <h3 className='info__price-number'>${product?.price}</h3>
                </div>
            <div className='info__quantity'>
                <span className='info__span'>Quantity</span>
                <div className='info__quantity-options'>
                    <button className='info__option' onClick={handleMinus}>-</button>
                    <p className='info__span-quantity'>{counter}</p>
                    <button className='info__option' onClick={handlePlus}>+</button>
                </div>
            </div>
            </div>
        <button className='info__btn' onClick={handleCart}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>    
        </div>
        </div>
    )
}

export default ProductDescripcion