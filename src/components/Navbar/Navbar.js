import React from 'react'
import './Navbar.css';
import brand from './brand.svg'
import { CartWidget} from './CartWidget/CartWidget'
import {Link} from "react-router-dom"

export const Navbar = ()=> {
    return (
        <nav className='flexNav'>
            <Link to='/' className= 'brandContainer'>
                <img src= {brand} className='brandLogo'/>
                <p>SneakersShop</p>
            </Link>
        
            <ul className='box'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/category/1'>Yeezy</Link>
                </li>
                <li>
                    <Link to='/category/2'>Jordan</Link>
                </li>
            </ul>

            <CartWidget/>
        </nav>
    )
}