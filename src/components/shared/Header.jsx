import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <img className='header__img' src="https://cdn.dribbble.com/users/2948332/screenshots/5926397/4.jpg" alt="logo-ecommerce" />
                    <li className='header__item1'><Link to='/'>E-commerce</Link></li>
                    <li className='header__item2'><Link to='/login'>Login</Link></li>
                    <li className='header__item3'><Link to='/cart'>Cart</Link></li>
                    <li className='header__item4'><Link to='/purchases'>Purchases</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header