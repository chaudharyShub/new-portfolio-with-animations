import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { scrollToTop, loadTopBar } from '../Details';
import about_me from '../../images/about_me.webp';
import 'atropos/css'
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
                <h1>
                    <span>somet</span>
                    <div></div>
                    <span>hing</span>
                    <span>ab</span>
                    <div></div>
                    <span>out</span>
                    <span>me</span>
                </h1>
                <img className='about_me_hero' src={about_me} alt='myself' />
            </div>
        </>
    );
}

export default About;
