import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { useCartContext } from '../../context/cartContext'
import './Navbar.css'

function Navbar() {
    // const { cart } = useCartContext()
    return (
        <header className="App-header">
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    𝝅zza
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/food' className='nav-links'>
                            Pizza!
                            <br />
                            <i className='fas fa-pizza-slice'></i>
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links'>
                            Contacto
                            <br />
                            <i className='fas fa-phone-alt'></i>                            
                        </Link>
                    </li>             
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links'>
                            Cuenta
                            <br />
                            <i className='fas fa-sign-in-alt'></i>                                                        
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/cart`} className='nav-links' activeClassName='active-nav-links' >
                            Carrito
                            <br />
                            <i className='fas fa-shopping-cart'></i>
                        </NavLink>
                    </li>                                          
                </ul>
            </nav>
        </header>        
    )
}

export default Navbar
