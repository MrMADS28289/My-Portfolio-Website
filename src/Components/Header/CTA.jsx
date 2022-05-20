import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Dowanload My Resume</a>
            <a href="#contact" className='btn btn-primary'>Hire Me</a>
        </div>
    );
};

export default CTA;