import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import FilterCategory from '../components/FilterCategory'
import FilterPrice from '../components/FilterPrice'
import ToOrderProducts from '../components/ToOrderProducts'
import './styles/home.css'

const Home = () => {

    const [productsFilter, setProductsFilter] = useState()
    const [inputValue, setInputValue] = useState("")

    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    }, [products])

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
        setInputValue(e.target.value)
    }

    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to

    return (
        <div className='general__products'>
            <div className='products__info'>
                <h2 className='info__title'>Search product</h2>
                <input className='
                
                ' value={inputValue} onChange={handleChange} type="text" />
            </div>
            <FilterPrice setInputPrice={setInputPrice} />
            <FilterCategory setInputValue={setInputValue} />
            <ToOrderProducts />
            <div className='products-container'>
                {
                    productsFilter?.filter(filterCallBack).length !== 0 ?
                        productsFilter?.filter(filterCallBack).map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                        :
                        <h1 className='products-container__title'>Sorry😞... ¡Not exist products with these qualities!</h1>
                }
            </div>
        </div>
    )
}

export default Home