import React from 'react';
import './Footer.css';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <ul className='social_icon'>
                <li><a href=""><MdFacebook className='footer_icon' /></a></li>
                <li><a href=""><AiFillTwitterCircle className='footer_icon' /></a></li>
                <li><a href=""><IoLogoLinkedin className='footer_icon' /></a></li>
                <li><a href=""><AiFillInstagram className='footer_icon' /></a></li>
            </ul>
            <ul className="menu">
                <li><a href="#home"><p className='menu_lin'>Home</p></a></li>
                <li><a href="#about"><p className='menu_lin'>About Me</p></a></li>
                <li><a href="#expriences"><p className='menu_lin'>Exprience</p></a></li>
                <li><a href="#services"><p className='menu_lin'>Service</p></a></li>
                <li><a href="#contact"><p className='menu_lin'>Contact</p></a></li>
            </ul>
        </footer>
    );
};

export default Footer;