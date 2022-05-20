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
                <li><a href="https://www.facebook.com/Mr.Mads2"><MdFacebook className='footer_icon' /></a></li>
                <li><a href="https://www.linkedin.com/in/abduss-sobhan/"><IoLogoLinkedin className='footer_icon' /></a></li>
                <li><a href="/"><AiFillTwitterCircle className='footer_icon' /></a></li>
                <li><a href="/"><AiFillInstagram className='footer_icon' /></a></li>
            </ul>
            <ul className="menu">
                <a href='/#'>Home</a>
                <a href='#about'>About</a>
                <a href='#expriences'>Exprience</a>
                <a href='#services'>Service</a>
                <a href='#contact'>Contact</a>
            </ul>
            <p>&copy; {date} Mr. Mads | All Rights Reserved</p>
            <p className='flex text-xs md:text-lg lg:text-3xl'>Created with <BsFillSuitHeartFill className='mx-3 mt-1' /> by MD Masum Abduss Sobhan</p>
        </footer>
    );
};

export default Footer;