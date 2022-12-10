import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { scrollToTop, loadTopBar } from '../Details';
import './Contact.css';


function Contact() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        loadTopBar(setProgress, 20, 500);
    }, []);

    return (
        <>
            <LoadingBar
                height={2}
                color='#f11946'
                loaderSpeed={450}
                progress={progress}
            />
            <div className='contact_main'>
                Contact
            </div>
        </>
    );
}

export default Contact;
