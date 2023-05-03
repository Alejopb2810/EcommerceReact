import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard'
import getConfig from '../Utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchasesList(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])


    return (
        <section className='purchase-section'>
            <h2 className='purchase__title'>My purchases</h2>
            <div className='purchases-container'>
                {
                    purchasesList?.map(purchase => (
                        <PurchaseCard
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Purchases