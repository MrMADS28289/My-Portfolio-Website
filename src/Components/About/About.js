import React from 'react';
import './About.css'
import me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <img src={me} alt="" />
                </div>
                <div className="container about_content">
                    <div className="about_cards">

                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Exprience</h5>
                            <small>3+ years</small>
                        </article>

                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Exprience</h5>
                            <small>3+ years</small>
                        </article>

                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Exprience</h5>
                            <small>3+ years</small>
                        </article>

                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet natus, error architecto modi aperiam, vitae ad inventore vero consectetur minus. Praesentium quod ea id numquam! Ipsum explicabo sed provident.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    );
};

export default About;