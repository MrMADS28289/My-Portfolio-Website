import React, { useState } from 'react';
import './NavBar.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const NavBar = () => {

    const [activeNav, setActivNav] = useState('#')

    return (
        <div className='nav-container'>
            <nav className='navigation'>
                <ul>
                    <li className={activeNav === '#' ? 'active' : ''}>
                        <a href="/#" onClick={() => setActivNav('#')}>
                            <span className="icon"><AiOutlineHome /></span>
                            <span className="text">Home</span>
                        </a>
                    </li>

                    <li onClick={() => setActivNav('about')} className={activeNav === 'about' ? 'active' : ''}>
                        <a href="#about">
                            <span className="icon"><AiOutlineUser /></span>
                            <span className="text">About</span>
                        </a>
                    </li>

                    <li onClick={() => setActivNav('expriences')} className={activeNav === 'expriences' ? 'active' : ''}>
                        <a href="#expriences">
                            <span className="icon"><BiBook /></span>
                            <span className="text">Exprience</span>
                        </a>
                    </li>
                    <li onClick={() => setActivNav('services')} className={activeNav === 'services' ? 'active' : ''}>
                        <a href="#services">
                            <span className="icon"><RiServiceLine /></span>
                            <span className="text">Services</span>
                        </a>
                    </li>
                    <li onClick={() => setActivNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>
                        <a href="#contact">
                            <span className="icon"><BiMessageSquareDetail /></span>
                            <span className="text">Contact</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;