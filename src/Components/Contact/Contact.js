import React, { useRef } from 'react';
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w1kk0y5', 'template_5ub3fgd', form.current, 'vw3RhUyXqF_NMoCFu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>yesform2018@gmail.com</h5>
                        <a href="mailto:yesform2018@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Mr. Mads</h5>
                        <a href="https://m.me/Mr.Mads2" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+8801734326573</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801734326573" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required id="" />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;