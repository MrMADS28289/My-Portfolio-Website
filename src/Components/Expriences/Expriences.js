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
                            <BsPatchCheckFill />
                        </article>
                    </div>
                </div>
                <div className="exprience_backend">

                </div>
            </div>
        </section>
    );
};

export default Expriences;