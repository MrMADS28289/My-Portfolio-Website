import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="#linkdin-link.com" target='_blank'><BsLinkedin /></a>
            <a href="#linkdin-link.com" target='_blank'><BsGithub /></a>
            <a href="#linkdin-link.com" target='_blank'><BsDribbble /></a>
        </div>
    );
};

export default HeaderSocial;