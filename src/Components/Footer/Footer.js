import React, { useContext, useRef } from 'react';
import SimpleParallax from 'simple-parallax-js';
import emailjs from '@emailjs/browser';
import black_arrow from '../../images/black_arrow.svg';
import { ToastContainer, toast } from 'react-toastify';
import form_submit from '../../images/form_submit.svg';
import { socialMedia } from '../Details';
import { StateContext } from '../../App';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.css';


function Footer() {

    const context = useContext(StateContext);
    const style = context.state.style;

    const submitButton = {
        background: style.color,
        color: style.background
    }

    const inputAndTextAreaStyle = {
        borderBottom: `1px solid ${style.color}`,
        color: style.color,
        '--placeholder-color': style.color
    }

    const notify = (message, type) => {
        if (type === 'success') {
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                pauseOnHover: false,
                autoClose: 2000,
                theme: "dark",
            });
            return;
        }
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            pauseOnHover: false,
            autoClose: 2000,
            theme: "dark",
        });
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8akr5tv', 'template_e82dyaj', form.current, '7ARg-ncbFIkKGt125')
            .then(() => notify("Form SUBMITTED 😄", 'success'))
            .catch(() => notify("ERROR sending form", 'error'));
        e.target.reset();
    }

    const images = document.getElementsByClassName('selected_work_footer');
    new SimpleParallax(images, {
        scale: 1.5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    return (
        <>
            <ToastContainer />
            <footer className='section_5'>
                <div className='footer_parallax'>
                    <img className="selected_work_footer" src={style.footerImage} alt="selected_work" />
                    <img className='footer_parallax_arrow' src={style.arrow} alt='arrow' />
                </div>
                <div className='lets_connect_parent' data-aos="fade-up">
                    <div></div>
                    <div className='lets_connect'>
                        <h2 style={{ color: style.color, borderColor: style.color }}>Let's </h2>
                        <h2 style={{ color: style.color, borderColor: style.color }}>Connect</h2>
                        <p style={{ color: style.color }}>Get in touch</p>
                    </div>
                </div>
                <div className='form_social_container' data-aos="fade-up" data-aos-delay="200">
                    <div className="form_container">
                        <form onSubmit={sendEmail} ref={form} style={{
                            borderBottom: `1.5px solid ${style.color}`,
                            borderRight: `1.5px solid ${style.color}`
                        }}>
                            <h3 style={{ color: style.color }}>send email</h3>
                            <input style={inputAndTextAreaStyle} type="text" name='name' placeholder='Enter full name' required />
                            <input style={inputAndTextAreaStyle} type="email" name='email' placeholder='Enter your email' required />
                            <textarea style={inputAndTextAreaStyle} type="text" name='message' placeholder='Enter message' required />
                            <button type='submit' style={submitButton}>
                                Submit
                                <img id='submit_arrow' className='submit_arrow' src={context.state.mode ? black_arrow : form_submit} alt='arrow' />
                            </button>
                        </form>
                        <div style={{ borderTop: `1.5px solid ${style.color}` }}></div>
                    </div>
                    <div className="social_media_container" style={{ borderColor: style.color }}>
                        <div></div>
                        <div className='social_media'>
                            <ul>
                                {
                                    socialMedia.map((items, index) => (
                                        <li key={index}>
                                            <a style={{ color: style.color }} href={items.link} target='_blank'>
                                                {items.platform}
                                                <img id='social_media_arrow' className='submit_arrow' src={style.arrow} alt="" />
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='copyright' style={{ color: style.color }}>COPYTIGHT © 2022 SHUBHAM. ALL RIGHT RESERVED.</p>
            </footer>
        </>
    );
}

export default Footer;
