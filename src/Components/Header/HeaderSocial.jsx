import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/abduss-sobhan/" ><BsLinkedin /></a>
            <a href="https://github.com/MrMADS28289" ><BsGithub /></a>
        </div>
    );
};

export default HeaderSocial;