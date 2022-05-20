import React from 'react';
import './About.css';
import me from '../../assets/me-about.jpeg';
import { FaAward } from 'react-icons/fa';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';

const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2 className='text-base md:text-xl lg:text-3xl mb-16'>About Me</h2>

            <div className="container about_container">
                <div
                    data-aos="flip-down"
                    data-aos-duration="1000" className="about_me">
                    <img src={me} alt="" />
                </div>
                <div className="container about_content">
                    <div className="about_cards">

                        <article
                            data-aos-duration="500"
                            data-aos="fade-left"
                            className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Exprience</h5>
                            <small>6+ Month</small>
                        </article>

                        <article
                            data-aos="fade-left"
                            data-aos-duration="700"
                            className="about_card">
                            <MdOutlinePeopleAlt className='about_icon' />
                            <h5>Clients</h5>
                            <small>0+ Worldwide</small>
                        </article>

                        <article
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="about_card">
                            <AiOutlineProject className='about_icon' />
                            <h5>Projects</h5>
                            <small>50+ Completed</small>
                        </article>

                    </div>

                    <p
                        data-aos="zoom-in"
                        data-aos-duration="600"
                    >
                        I am a professional web developer . If you are looking for top quality websites to provide your business or products the best possible, then you have come to the right place. You will get my dedicated work as well as excellent services for your clients at a reasonable price and within deadlines. I enjoy my work and try my level best to give you an exceptional customer service that you will love. Feel free to contact me , and visit my portfolio website. thanks for read about me.
                    </p>

                    <a
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        href="#contact" className='btn btn-primary'>Hire Me</a>

                </div>
            </div>
        </section>
    );
};

export default About;