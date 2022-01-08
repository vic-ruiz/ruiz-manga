import React from 'react'
import './Navbar.css';
import brand from './brand.svg'

export const MiNav = ()=> {
    return (
        <nav className='flexNav'>
            <div className= 'brandContainer'>
                <img src= {brand} className='brandLogo'/>
                <p>SneakersShop</p>
            </div>
        
            <ul className='box'>
                <li><a href="default.asp">Home</a></li>
                <li><a href="products.asp">Products</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </nav>
    )
}