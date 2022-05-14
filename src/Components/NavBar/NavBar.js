import React from 'react';
import './NavBar.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const NavBar = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#expriences"><BiBook /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#"><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default NavBar;