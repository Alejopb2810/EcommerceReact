import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({ setInputPrice }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        if (inputFrom && inputTo) {
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
        } else if (!inputFrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if (inputFrom && !inputTo) {
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        } else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        }
    }

    return (
        <section className='filter-container'>
            <h2 className='filter__title'>Filter Price</h2>
            <form className='filter__form' onSubmit={handleSubmit}>
                <div className='filter__field'>
                    <label className='filter__label' htmlFor="from">From</label>
                    <input className='filter__input' type="number" id='from' />
                </div>
                <div className='filter__field'>
                    <label className='filter__label' htmlFor="to">To</label>
                    <input className='filter__input' type="number" id='to' />
                </div>
                <button className='filter__btn'>Apply</button>
            </form>
        </section>
    )
}

export default FilterPrice