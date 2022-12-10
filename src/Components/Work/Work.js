import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AnimationHero from '../AnimationHero/AnimationHero';
import { workHeroHeading } from '../Details';
import glimpse from '../../images/glimpse.webp';
import { scrollToTop } from '../Details';
import './Work.css';

function Work() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <AnimationHero hero={glimpse} text={workHeroHeading} to={'work_main'} />
            <div className='work_main'>
                Work
                <Link to='personal'>Personal</Link>
                <Link to='professional'>Professional</Link>
                <Outlet />
            </div>
        </>
    );
}

export default Work;
