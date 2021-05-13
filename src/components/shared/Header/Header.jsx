import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <NavLink className='logo' to="/"><img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1620876663/movie_logo_2_xwcgqh.png" alt="Movie logo" id="movieLogo"></img></NavLink>
            </div>
            <div className='header-right'>
                <NavLink className='nav' to="/charts" ><img src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1620875111/Chart_2_savixi.png" alt="Chart text image" id="chart-image"></img></NavLink>
            </div>
            <div className='bottom-border'>

            </div>

        </header>
    );
};

export default Header;

