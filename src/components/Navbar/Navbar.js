import React from 'react'
import './Navbar.css';
import brand from './brand.svg'
import { CartWidget} from './CartWidget/CartWidget'

export const MiNav = ()=> {
    return (
        <nav className='flexNav'>
            <a href="default.asp" className= 'brandContainer'>
                <img src= {brand} className='brandLogo'/>
                <p>SneakersShop</p>
            </a>
        
            <ul className='box'>
                <li><a href="default.asp">Home</a></li>
                <li><a href="products.asp">Products</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>

            <CartWidget/>
        </nav>
    )
}