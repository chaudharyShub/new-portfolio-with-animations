import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { scrollToTop, loadTopBar } from '../Details';
import './About.css';


function About() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        loadTopBar(setProgress, 40, 400);
    }, []);

    return (
        <>
            <LoadingBar
                height={2}
                color='#1D8BCF'
                loaderSpeed={450}
                progress={progress}
            />
            <div className='about_main'>
                About
            </div>
        </>
    );
}

export default About;
