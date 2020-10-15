import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <header className="App-header">
            <Router>
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
                    </ul>

                </nav>
            </Router>
        </header>        
    )
}

export default Navbar
