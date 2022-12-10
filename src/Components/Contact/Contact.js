import React, { useEffect } from 'react';
import './Contact.css';
import { scrollToTop } from '../Details';

function Contact() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className='contact_main'>
            Contact
        </div>
    );
}

export default Contact;
