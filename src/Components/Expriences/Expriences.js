import React from 'react';
import './Expriences.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Expriences = () => {
    return (
        <section id='expriences'>
            <h5>What Skills I Have</h5>
            <h2>My Exprience</h2>

            <div className="container exprience_container">
                <div className="exprience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="exprience_contant">
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONT END */}

                <div className="exprience_backend">
                    <h3>Backend Development</h3>
                    <div className="exprience_contant">
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exprience_details'>
                            <BsPatchCheckFill className='exprience_details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expriences;