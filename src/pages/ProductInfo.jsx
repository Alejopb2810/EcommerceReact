import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/CardProduct'
import ProductDescripcion from '../components/productsInfo/ProductDescripcion'
import SliderImg from '../components/productsInfo/SliderImg'
import './styles/productInfo.css'

const ProductInfo = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()

    const [similarProduct, setSimilarProduct] = useState()

    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [id])


    useEffect(() => {
        if (allProducts && product) {
            const pivot = allProducts.filter(prod => prod.category.name === product.category)
            setSimilarProduct(pivot)
        }
    }, [allProducts, product])

    return (
        <div>
            <SliderImg ListImg={product?.productImgs} />
            <ProductDescripcion product={product} />
            <section className='similar-products'>
                <h2 className='similar-products__title'>Discover similar items</h2>
                <div className='similar-products-container'>
                    {
                        similarProduct?.map(simProd => {
                            if (simProd.title !== product.title) {
                                return (<CardProduct
                                    key={simProd.id}
                                    product={simProd}
                                />
                                )
                            }
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ProductInfo