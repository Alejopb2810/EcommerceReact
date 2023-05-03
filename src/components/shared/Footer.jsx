import React from 'react'
import './styles/footer.css'

const Footer = ({ }) => {
    return (
        <footer className='footer-container'>
            <h1 className='footer__title'>All Rights Reserved</h1>
            <ul className='footer__brand'>
                <li className='footer__item'><i className="fa-brands fa-square-instagram"></i></li>
                <li className='footer__item'><i className="fa-brands fa-square-facebook"></i></li>
                <li className='footer__item'><i className="fa-brands fa-amazon"></i></li>
                <li className='footer__item'><i className="fa-brands fa-twitter"></i></li>
            </ul>
        </footer>
    )
}

export default Footer