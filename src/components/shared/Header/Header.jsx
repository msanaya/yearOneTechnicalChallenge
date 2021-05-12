import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <NavLink className='logo' to="/"><img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1620791546/movie_logo_fdfhcu.png" alt="Movie logo" id="movieLogo"></img></NavLink>
            </div>
            <div className='header-right'>
                <NavLink className='link' to="/charts">Charts</NavLink>
            </div>
            <div className='h-bottom-border'><img src='https://res.cloudinary.com/dhj9oydvn/image/upload/v1620794372/wavy_line_rcs1z4.png' alt='Bottom border'
            id='border-image' ></img>
            </div>
            
        </header>
    );
};

export default Header;

