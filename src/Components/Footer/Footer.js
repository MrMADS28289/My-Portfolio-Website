import React from 'react';
import './Footer.css';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            <ul className='social_icon'>
                <li><a href=""><MdFacebook className='footer_icon' /></a></li>
                <li><a href=""><AiFillTwitterCircle className='footer_icon' /></a></li>
                <li><a href=""><IoLogoLinkedin className='footer_icon' /></a></li>
                <li><a href=""><AiFillInstagram className='footer_icon' /></a></li>
            </ul>
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Exprience</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <p>&copy; {date} Mr. Mads | All Rights Reserved</p>
            <p>Created with <BsFillSuitHeartFill /> by MD Masum Abduss Sobhan</p>
        </footer>
    );
};

export default Footer;