import React, { useRef } from 'react';
import SimpleParallax from 'simple-parallax-js';
import emailjs from '@emailjs/browser';
import arrow from '../../images/arrow.svg';
import footer_parallax from '../../images/footer_parallax.webp';
import './Footer.css';

function Footer() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8akr5tv', 'template_e82dyaj', form.current, '7ARg-ncbFIkKGt125')
            .then(() => {
                alert('SUCCESS! Your form has been submitted.');
            });
        e.target.reset();
    }

    const socialMedia = ['Facebook', 'Instagram', 'LinkedIn', 'Github', 'Whatsapp'];
    const image = document.getElementsByClassName('selected_work_footer');
    new SimpleParallax(image, {
        delay: 0,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    return (
        <section className='section_5'>
            <div className='footer_parallax'>
                <img className="selected_work_footer" src={footer_parallax} alt="selected_work" />
                <img className='footer_parallax_arrow' src={arrow} alt='arrow' />
            </div>
            <div className='lets_connect_parent'>
                <div></div>
                <div className='lets_connect'>
                    <h2>Let's </h2>
                    <h2>Connect</h2>
                    <p>Get in touch</p>
                </div>
            </div>
            <div className='form_social_container'>
                <div className="form_container">
                    <form onSubmit={sendEmail} ref={form}>
                        <h3>send email</h3>
                        <input type="text" name='name' placeholder='Enter full name' required />
                        <input type="email" name='email' placeholder='Enter your email' required />
                        <textarea type="text" name='message' placeholder='Enter message' required />
                        <button type='submit'>
                            Submit
                            <img id='submit_arrow' className='submit_arrow' src={arrow} alt='arrow' />
                        </button>
                    </form>
                    <div></div>
                </div>
                <div className="social_media_container">
                    <div></div>
                    <div className='social_media'>
                        <ul>
                            {
                                socialMedia.map((items, index) => (
                                    <li key={index}>
                                        <a href="#">{items}
                                            <img id='social_media_arrow' className='submit_arrow' src={arrow} alt="" />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <p className='copyright'>COPYTIGHT © 2022 SHUBHAM. ALL RIGHT RESERVED.</p>
        </section>
    );
}

export default Footer;
