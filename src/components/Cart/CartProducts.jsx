import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../Utils/getConfig'
import './styles/cartProduct.css'

const CartProducts = ({ product }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='cart-product'>
            <header >
                <h3>{product.brand}</h3>
                <h3>{product.title}</h3>
            </header>
            <button onClick={handleDelete}>
                <i className="fa-solid fa-trash-arrow-up"></i>
            </button>
            <div>{product.productsInCart.quantity}</div>
            <div>
                <p>Price x1: </p>
                <span>$ {product.price}</span>
            </div>
        </article>
    )
}

export default CartProducts