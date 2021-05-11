import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <NavLink className='logo' to="/">Logogoeshere</NavLink>
            </div>
            <div className='header-right'>
                <NavLink className='link' to="/charts">Charts</NavLink>
            </div>
        </header>
    );
};

export default Header;

