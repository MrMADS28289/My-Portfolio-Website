import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2 className='text-base md:text-xl lg:text-3xl mb-16'>Portfolio</h2>

            <div className="container portfolio_container">
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="300"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Auto Showroom</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/MrMADS28289/Auto-Showroom" className='btn' >Github</a>
                        <a href="https://mads-auto-showroom.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="400"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>DocTime</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/MrMADS28289/DocTime-Client" className='btn' >Github</a>
                        <a href="https://mads-doctime.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="500"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Photo Ghor</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/MrMADS28289/Photo-Ghor" className='btn' >Github</a>
                        <a href="https://photoghor-17c33.web.app/" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="700"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="#gitlink" className='btn' >Github</a>
                        <a href="#porfolio" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="900"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="#gitlink" className='btn' >Github</a>
                        <a href="#porfolio" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="1100"
                    className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="#gitlink" className='btn' >Github</a>
                        <a href="#porfolio" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;