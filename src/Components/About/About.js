import React, { useContext, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { scrollToTop, loadTopBar } from '../Details';
import about_me from '../../images/about_me.webp';
import arrow from '../../images/arrow.svg';
import 'atropos/css'
import './About.css';
import { Link } from 'react-scroll';
import Atropos from 'atropos/react';
import { StateContext } from '../../App';


function About() {

    const context = useContext(StateContext);
    const style = context.state.style;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollToTop();
        loadTopBar(setProgress, 40, 400);
    }, []);

    const animation_border_left_top = {
        borderTop: '2px solid #1D8BCF',
        borderLeft: '2px solid #1D8BCF'
    }

    const animation_border_right_bottom = {
        borderBottom: '2px solid #1D8BCF',
        borderRight: '2px solid #1D8BCF'
    }

    return (
        <>
            <LoadingBar
                height={2}
                color='#1D8BCF'
                loaderSpeed={450}
                progress={progress}
            />
            <div className='about_main' style={{ color: style.color }}>
                <h1>
                    <span>somet</span>
                    <div></div>
                    <span>hing</span>
                    <span>ab</span>
                    <div></div>
                    <span>out</span>
                    <span>me</span>
                    <img src={arrow} alt="arrow" />
                </h1>
                <div className='about_main_inner'>
                    <div className='about_hero_image'>
                        <Atropos
                            className='my_atropos'
                            activeOffset={100}
                            rotateXMax={10}
                            rotateYMax={10}
                            shadow={false}
                            shadowScale={1}>
                            <img data-atropos-offset="1" className='about_me_hero' src={about_me} alt='myself' />
                            <div data-atropos-offset="-2" style={animation_border_left_top} className="animation_border_left_top"></div>
                            <div data-atropos-offset="-2" style={animation_border_right_bottom} className="animation_border_right_bottom"></div>
                        </Atropos>
                        <Link to='about_text_div' smooth={true} duration={500}>
                            <img src={style.arrow} alt='arrow' />
                        </Link>
                    </div>
                    <div id='about_text_div' className='about_text_div'>
                        <p>I am a Front-End Developer. My first working experience was of a mechanical engineer, I enjoyed that and learnt a lot.
                            <br /> <br />
                            I started coding as a hobbie, but because of my increasing interest in creating and designing the web, I decided to switch my career from mechanical to web development and to achieve that I improved my techanical skills and learnt some programming languages =&gt; HTML, CSS, JavaScript, REACT.JS, C++, PYTHON, TAILWIND and started my new journey as a front-end web developer.
                        </p>
                        <div className='download_resume'>
                            <a style={{ color: style.color }} href='javascript:void(0)'>download resume <img className='submit_arrow' src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
