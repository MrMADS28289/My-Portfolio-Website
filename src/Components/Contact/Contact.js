import React, { useRef } from 'react';
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w1kk0y5', 'template_5ub3fgd', form.current, 'vw3RhUyXqF_NMoCFu')
            .then((result) => {
            }, (error) => {
                toast.error(error.text);
            });
        toast.success('Eamil sent success.');
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2 className='text-base md:text-xl lg:text-3xl mb-16'>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article
                        data-aos="zoom-in-right"
                        data-aos-duration="800"
                        className="contact_option">
                        <MdOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>abduss.sobhan28@gmail.com</h5>
                        <a href="mailto:abduss.sobhan28@gmail.com" >Send a message</a>
                    </article>

                    <article
                        data-aos="zoom-in-right"
                        data-aos-duration="900"
                        className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Mr. Mads</h5>
                        <a href="https://m.me/Mr.Mads2" >Send a message</a>
                    </article>

                    <article
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+8801734326573</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801734326573" >Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required id="" />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Contact;