import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-logo-item'>
                    <Link to='/' className='nav-link'>
                        Richard Huang
                    </Link>
                </div>
                <div className='nav-items'>
                    <Link to='/' className='nav-link nav-page'>
                        Home
                    </Link>
                    <Link to='/about' className='nav-link nav-page'>
                        About
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;