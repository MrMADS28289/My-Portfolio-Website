import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5 className='hello-text'>Hello ! . .</h5>
                <h2 className="static-text">Welcome To My Portfolio Website,</h2>
                <div className="wrapper">
                    <ul className="dynamic-texts">
                        <li><span>I'm A Web Developer</span></li>
                        <li><span>My Name Is MD Masum Abduss Sobhan</span></li>
                    </ul>
                </div>
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