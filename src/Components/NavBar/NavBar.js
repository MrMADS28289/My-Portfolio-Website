import React, { useState } from 'react';
import './NavBar.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const NavBar = () => {

    const [activeNav, setActivNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActivNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActivNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#expriences" onClick={() => setActivNav('expriences')} className={activeNav === 'expriences' ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActivNav('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActivNav('contact')} className={activeNav === 'contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default NavBar;