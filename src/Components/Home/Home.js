import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import simpleParallax from 'simple-parallax-js';
import AnimationHero from '../AnimationHero/AnimationHero';
import SelectedWork from '../SelectedWork/SelectedWork';
import 'atropos/css'
import './Home.css';

import arrow from '../../images/arrow.svg';
import hero_me from '../../images/hero_me.webp';
import ellipse_1 from '../../images/ellipse_1.webp';
import hero_light from '../../images/hero_light.webp';
import selected_work from '../../images/selected_work.webp';
import mechanical_software_arrow from '../../images/mechanical_software_arrow.svg';
import {
    follow_me,
    homeHeroHeading,
    languages,
    mechanical_software,
    scrollToTop,
    selectedWork
} from '../Details';


function Home() {

    useEffect(() => {
        scrollToTop();
    }, []);

    const image = document.getElementsByClassName('selected_work');
    new simpleParallax(image, {
        delay: 0,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    return (
        <>
            <AnimationHero hero={hero_light} text={homeHeroHeading} to={'section_2'} />
            <section id='section_2' className='section_2'>
                <img className='ellipse_1' src={ellipse_1} alt="background" />
                <div className='section_2_inner'>
                    <Link className='about_link' to='#'>
                        <span>
                            about
                            <div className='hidden_div'></div>
                            me
                        </span>
                        <div className='hidden_div_2'></div>
                        <img className='right_arrow' src={arrow} alt='arrow' />
                        <span className='DOB'>1995</span>
                    </Link>
                    <h2>shubham chaudhary</h2>
                    <div className='mech_to_web'>
                        <img className='hero_me' src={hero_me} alt="myself" />
                        <div className='mech_to_web_text'>
                            <h4>front-end developer</h4>
                            <div className='mech_to_text_para'>
                                <p>mechanical</p>
                                <img className='right_arrow' src={arrow} alt="arrow" />
                                <p>web dev.</p>
                            </div>
                        </div>
                    </div>
                    <div className='languages_follow'>
                        <div className="languages">
                            <h5>languages</h5>
                            <ul>
                                {
                                    languages.map(language => (
                                        <li key={language}>{language}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="follow_me">
                            <h5>follow me</h5>
                            <ul>
                                {
                                    follow_me.map(social => (
                                        <li key={social}><Link>{social}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className='mech_to_web_desktop'>
                        <div className='mech_to_web_desktop_text_image'>
                            <div className='mech_to_web_text_desktop'>
                                <h4>front-end developer</h4>
                                <div>
                                    <p>mechanical engg.</p>
                                    <img src={arrow} alt="arrow" />
                                    <p>web dev.</p>
                                </div>
                            </div>
                            <img className='hero_me' src={hero_me} alt="myself" />
                        </div>
                        <div className='languages_follow_desktop'>
                            <div className="follow_me_desktop">
                                <h5>follow me</h5>
                                <p>I am available on the following social media platforms.</p>
                                <ul>
                                    {
                                        follow_me.map(social => (
                                            <li key={social}><Link>{social}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="languages_desktop">
                                <h5>languages</h5>
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
                    <div id="wrapper">
                        <div className="box-area">
                            <div id="box-front" className="box"></div>
                            <div id="box-right" className="box"></div>
                            <div id="box-back" className="box"></div>
                            <div id="box-left" className="box"></div>
                            <div id="box-top" className="box"></div>
                            <div id="box-bottom" className="box"></div>
                        </div>
                    </div>
                    <div></div>
                    <div className='mechanical_software'>
                        {
                            mechanical_software.map(items => {
                                if (items.className === 'arrow') {
                                    return <img key={items.id} src={mechanical_software_arrow} alt="arrow" />
                                } else {
                                    return (
                                        <div className={items.className} key={items.id}>
                                            <h5>{items.h5}</h5>
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
                    <img className="selected_work" src={selected_work} alt="selected_work" />
                    <div className='selected_work_text'>
                        <p>SELE</p>
                        <p>CTED</p>
                        <p>WORK</p>
                    </div>
                    <img className='selected_work_arrow' src={arrow} alt='arrow' />
                </div>
            </section>

            <section className='section_4'>
                <p>Selected Works</p>
                {
                    selectedWork.map(work => (
                        <SelectedWork
                            key={work.id}
                            id={work.id}
                            name={work.name}
                            img={work.image}
                            link={work.link}
                        />
                    ))
                }
                <div className='see_more'>
                    <Link to='#'>
                        <span>se</span>
                        <div></div>
                        <span>e</span>
                        <span>mo</span>
                        <div></div>
                        <span>re</span>
                        <img src={arrow} alt='arrow' />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;
