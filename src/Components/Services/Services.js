import React from 'react';
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2 className='text-base md:text-xl lg:text-3xl mb-16'>Services</h2>

            <div className="container services_container">
                <article
                    data-aos="zoom-in-right"
                    data-aos-duration="700"
                    className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Work Environment — Web developers work closely with project managers and designers to ensure that final products adhere to predetermined budgets, scope,</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p> independently as freelancers or with company teams to create websites. Depending on the job, these professionals may ...</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article
                    data-aos="zoom-out-up"
                    data-aos-duration="700"
                    className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p> Integrating multimedia content onto a site. Testing web applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Troubleshooting problems with performance or user experience.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p> responsible for programming code that tells websites how to operate. Web Developers typically specialize in either “front-end”</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
                <article
                    data-aos="zoom-in-left"
                    data-aos-duration="700"
                    className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p> independently as freelancers or with company teams to create websites. Depending on the job, these professionals may ...</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p> responsible for programming code that tells websites how to operate. Web Developers typically specialize in either “front-end”</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;