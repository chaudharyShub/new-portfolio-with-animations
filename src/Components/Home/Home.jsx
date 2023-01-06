import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import simpleParallax from 'simple-parallax-js';
import AnimationHero from '../AnimationHero/AnimationHero';
import SelectedWork from '../SelectedWork/SelectedWork';
import { StateContext } from '../../App';
import {
    follow_me,
    languages,
    mechanical_software,
    scrollToTop,
    selectedWork,
    loadTopBar,
    animationBoxId,
    homeHeroHeadingDark,
    homeHeroHeadingLight
} from '../Details';
import './Home.css';
import hero_me from '../../images/hero_me.webp';


function Home() {

    document.title = "Shubham Chaudhary | Front End Developer";

    const context = useContext(StateContext);
    const style = context.state.style;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        !context.topLoadingBarState.homeTopLoadingBar && loadTopBar(setProgress, 70, 500);
        setTimeout(() => {
            context.topLoadingBarDispatch('DISABLE_HOME_TOP_LOADING_BAR');
        }, 2000);
    }, []);

    const image = document.getElementsByClassName('selected_work');
    new simpleParallax(image, {
        scale: 1.5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    const animation_border_home_left_top = {
        borderTop: `2px solid ${style.color}`,
        borderLeft: `2px solid ${style.color}`
    }

    const animation_border_home_right_bottom = {
        borderBottom: `2px solid ${style.color}`,
        borderRight: `2px solid ${style.color}`
    }

    return (
        <>
            <LoadingBar
                height={2}
                color={style.color}
                loaderSpeed={450}
                progress={progress}
            />

            <AnimationHero
                hero={style.homeHero}
                text={context.state.mode ? homeHeroHeadingDark : homeHeroHeadingLight}
                to={'section_2'}
                arrow={style.arrow}
            />

            <section id='section_2' className='section_2'>
                <img className='ellipse_1' src={style.ellipse} alt="background" />
                <div className='section_2_inner'>
                    <Link className='about_link' data-aos="fade-up" to='/about' style={{ color: style.color }}>
                        <span>
                            about
                            <div className='hidden_div'></div>
                            me
                        </span>
                        <div className='hidden_div_2'></div>
                        <img className='right_arrow' src={style.arrow} alt='arrow' />
                    </Link>
                    <span className='DOB' data-aos="fade-up" style={{ color: style.color }}>1995</span>
                    <h2 style={{ color: style.color }} data-aos="fade-up">shubham chaudhary</h2>
                    <div className='mech_to_web' data-aos="fade-up">
                        <img className='hero_me' src={hero_me} alt="myself" />
                        <div className='mech_to_web_text' style={{ color: style.color }}>
                            <h4 >front-end developer</h4>
                            <div className='mech_to_text_para'>
                                <p>mechanical</p>
                                <img className='right_arrow' src={style.arrow} alt="arrow" />
                                <p>web dev.</p>
                            </div>
                        </div>
                    </div>
                    <div className='languages_follow' data-aos="fade-up" style={{ color: style.color }}>
                        <div className="languages">
                            <h5 style={{ borderBottom: `1px solid ${style.color}` }}>languages</h5>
                            <ul>
                                {
                                    languages.map(language => (
                                        <li key={language}>{language}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="follow_me">
                            <h5 style={{ borderBottom: `1px solid ${style.color}` }}>follow me</h5>
                            <ul>
                                {
                                    follow_me.map(social => (
                                        <li key={social.platform}>
                                            <a style={{ color: style.color, borderBottom: `1.3px solid ${style.color}` }} href={social.link} target='_blank'>
                                                {social.platform}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className='mech_to_web_desktop' data-aos="fade-up" data-aos-delay="100">
                        <div className='mech_to_web_desktop_text_image'>
                            <div className='mech_to_web_text_desktop' style={{ color: style.color }}>
                                <h4 >front-end developer</h4>
                                <div>
                                    <p>mechanical engg.</p>
                                    <img src={style.arrow} alt="arrow" />
                                    <p>web dev.</p>
                                </div>
                            </div>
                            <div className='animation_border_home'>
                                <img data-atropos-offset="2" className='hero_me' src={hero_me} alt="myself" />
                                <div style={animation_border_home_left_top} className='animation_border_home_left_top'></div>
                                <div style={animation_border_home_right_bottom} className='animation_border_home_right_bottom'></div>
                            </div>
                        </div>
                        <div className='languages_follow_desktop' style={{ color: style.color }}>
                            <div className="follow_me_desktop" style={{
                                borderBottom: `1px solid ${style.color}`
                            }}>
                                <h5>follow me</h5>
                                <p>I am available on the following social media platforms.</p>
                                <ul>
                                    {
                                        follow_me.map(social => (
                                            <li key={social.platform}>
                                                <a style={{
                                                    color: style.color,
                                                    borderBottom: `1.3px solid ${style.color}`
                                                }} href={social.link} target='_blank'>
                                                    {social.platform}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="languages_desktop">
                                <h5 style={{ borderBottom: `1px solid ${style.color}` }}>languages</h5>
                                <ul>
                                    {
                                        languages.map(language => (
                                            <li key={language}>{language}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section_3'>
                <div className='animation_mechanical_software_container'>
                    <div id="wrapper" data-aos="fade-up">
                        <div className="box-area">
                            {
                                animationBoxId.map(id => <div key={id} id={id} className="box"></div>)
                            }
                        </div>
                    </div>
                    <div></div>
                    <div className='mechanical_software' data-aos="fade-up" style={{ color: style.color }}>
                        {
                            mechanical_software.map(items => {
                                if (items.className === 'arrow') {
                                    return <img key={items.id} src={style.mechanicalSoftwareArrow} alt="arrow" />
                                } 
                                else {
                                    return (
                                        <div className={items.className} key={items.id}>
                                            <h5 style={{ borderBottom: `1px solid ${style.color}` }}>{items.h5}</h5>
                                            <p>{items.company}</p>
                                            <p>{items.totalTime}<br />
                                                {items.years}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="selected_work_container">
                    <img className="selected_work" src={style.selected_work} alt="selected_work" />
                    <div className='selected_work_text'>
                        <p>SELE</p>
                        <p>CTED</p>
                        <p>WORK</p>
                    </div>
                    <img className='selected_work_arrow' src={style.arrow} alt='arrow' />
                </div>
            </section>

            <section className='section_4' style={{ color: style.color }}>
                <p style={{ borderTop: `1.5px solid ${style.color}` }}>Selected Works</p>
                {
                    selectedWork.map(work => (
                        <SelectedWork
                            key={work.id}
                            id={work.id}
                            name={work.name}
                            img={work.image}
                            link={work.link}
                            data_aos_offset={work.data_aos_offset}
                            style={{ color: style.color }}
                        />
                    ))
                }
                <div className='see_more' data-aos="fade-up">
                    <Link to='/work' style={{
                        color: style.color,
                        borderBottom: `1px solid ${style.color}`
                    }}>
                        <span>se</span>
                        <div></div>
                        <span>e</span>
                        <span>mo</span>
                        <div></div>
                        <span>re</span>
                        <img src={style.arrow} alt='arrow' />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;
