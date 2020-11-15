import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useCartContext } from '../../context/cartContext'
import './Navbar.css'

function Navbar() {
    
    const { cart } = useCartContext()    
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
        console.log('Navbar - cart:', cart)
        for (let i = 0; i < cart.length; i++) {
            setCount(count => count + cart[i].count) 
        }
        // console.log('Navbar - count:', count)
    }, [cart])

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
                        {
                            count > 0 ?
                                <NavLink to={`/cart`} className='nav-links' activeClassName='active-nav-links' >
                                    Carrito
                                    <br />
                                    <CartWidget count={count}/>
                                </NavLink> :
                                <></>
                        }
                    </li>                                          
                </ul>
            </nav>
        </header>        
    )
}

export default Navbar
