import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import AnimationHero from '../AnimationHero/AnimationHero';
import { loadTopBar, workHeroHeading, scrollToTop } from '../Details';

import './Work.css';
import glimpse from '../../images/glimpse.webp';
import arrow_orange from '../../images/arrow_orange.svg';


function Work() {

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
            <AnimationHero hero={glimpse} text={workHeroHeading} to={'work_main'} arrow={arrow_orange} />
            <section className='work_main'>
                <NavLink to='personal'>Personal</NavLink>
                <p>/</p>
                <NavLink to='professional'>Professional</NavLink>
            </section>
            <Outlet />
        </>
    );
}

export default Work;
