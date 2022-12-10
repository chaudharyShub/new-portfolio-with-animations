import React, { useEffect } from 'react';
import './About.css';
import { scrollToTop } from '../Details';


function About() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <div className='about_main'>
                About
            </div>
        </>
    );
}

export default About;
