import React from 'react';
import './AnimationHero.css';
import Atropos from 'atropos';
import arrow from '../../images/arrow.svg';
import { Link } from 'react-scroll'

function AnimationHero({ hero, text, to }) {

    const myAtropos = Atropos({
        el: '.my-atropos',
        shadow: true
    });

    return (
        <section className='section_1'>
            <div className='home_inner'>
                <div className="atropos my-atropos">
                    <div className="atropos-scale">
                        <div className="atropos-rotate">
                            <div className="atropos-inner">
                                <div className='hero_container'>
                                    <h1> <span style={text.a.style}>{text.a.text}</span> <span style={text.b.style}>{text.b.text}</span> <span style={text.c.style}>{text.c.text}</span><span style={text.d.style}>{text.d.text}</span> <span style={text.e.style}>{text.e.text}</span> <span style={text.f.style}>{text.f.text}</span></h1>
                                    <img className='hero_image' src={hero} alt="main" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* THIS IS REACT SCROLL LINK FOR SMOOTH SCROLL */}
            <Link to={to} smooth={true} duration={500}>
                <img className='animation_arrow' src={arrow} alt='arrow' />
            </Link>

        </section>
    );
}

export default AnimationHero;
