import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {

    const datePurchase = new Date(purchase.createdAt)

    return (
        <article className='purchase-structure'>
            <h3 className='purchase__date'>{datePurchase.toLocaleDateString()}</h3>
            <div className='purchase__context'>
                <ul className='purchase__list'>
                    {
                        purchase.cart.products.map(prod => (
                            <li className='purchase__item' key={prod.id}>
                                <h4 className='purchase__name'>{prod.title}</h4>
                                <span className='purchase__quantity'>{prod.productsInCart.quantity} x </span>
                                <span className='purchase__price'>{prod.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default PurchaseCard