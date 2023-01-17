import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import AnimationHero from '../../Components/AnimationHero/AnimationHero';
import {
    loadTopBar,
    scrollToTop,
    workHeroHeadingDark,
    workHeroHeadingLight
} from '../../Lib/Details';
import { StateContext } from '../../App';
import './Work.css';


function Work() {

    document.title = "Shubham Chaudhary | Work";

    const context = useContext(StateContext);
    const style = context.state.style;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        !context.topLoadingBarState.workTopLoadingBar && loadTopBar(setProgress, 20, 500);
        setTimeout(() => {
            context.topLoadingBarDispatch('DISABLE_WORK_TOP_LOADING_BAR');
        }, 2000);
    }, []);

    return (
        <>
            <LoadingBar
                height={2}
                color={style.color}
                loaderSpeed={450}
                progress={progress}
            />
            <AnimationHero
                hero={style.glimpse}
                to={'work_main'}
                text={context.state.mode ? workHeroHeadingDark : workHeroHeadingLight}
                arrow={style.arrow}
            />
            <section className='work_main' style={{ color: style.color }}>
                <NavLink style={{ color: style.color }} to='personal'>Personal</NavLink>
                <p>/</p>
                <NavLink style={{ color: style.color }} to='professional'>Professional</NavLink>
            </section>
            <Outlet />
        </>
    );
}

export default Work;
