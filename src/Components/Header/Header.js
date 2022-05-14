import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello i'm</h5>
                <h1>Mr. Mads</h1>
                <h5 className="text-light">Web Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={me} alt="" />
                </div>
                <a href="#contact" className='scroll_down'>Scrool Down</a>
            </div>
        </header>
    );
};

export default Header;