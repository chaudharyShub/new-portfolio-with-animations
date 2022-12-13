import React, { useContext, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import AnimationHero from '../AnimationHero/AnimationHero';
import { scrollToTop, loadTopBar, contactHeroHeading } from '../Details';
import './Contact.css';
import { StateContext } from '../../App';


function Contact() {

    const [progress, setProgress] = useState(0);
    const context = useContext(StateContext);
    const style = context.state.style;

    useEffect(() => {
        scrollToTop();
        loadTopBar(setProgress, 80, 900);
    }, []);

    return (
        <>
            <LoadingBar
                height={2}
                color='#1D8BCF'
                loaderSpeed={450}
                progress={progress}
            />
            <AnimationHero
                hero={style.contactMe}
                text={contactHeroHeading}
                to={'contact_main'}
                arrow={style.arrow}
            />
            <div id='contact_main' className='contact_main'>
                <p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224368.39371316473!2d77.26107640547453!3d28.516983405024796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1670941739530!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </p>
                <div className="contact_details_container" style={{ color: style.color }}>
                    <div className='contact_phone_email'>
                        <p>phone</p>
                        <img src={style.arrow} alt="" />
                        <p>+9315583873</p>
                    </div>
                    <div className="contact_phone_email">
                        <p>email</p>
                        <img src={style.arrow} alt="" />
                        <p>chaudhary.shubham361@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
