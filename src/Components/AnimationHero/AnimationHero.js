import React from 'react';
import { Link } from 'react-scroll'
import './AnimationHero.css';
import Atropos from 'atropos/react';

function AnimationHero({ hero, text, to, arrow }) {

    return (
        <section className='section_1'>
            <div className='home_inner'>
                <Atropos
                    className="my-atropos"
                    rotateXMax={10}
                    rotateYMax={10}
                    activeOffset={40}
                    shadowScale={0.9}
                >
                    <div data-atropos-offset="-5" className='hero_container'>
                        <h1> <span style={text.a.style}>{text.a.text}</span> <span style={text.b.style}>{text.b.text}</span> <span style={text.c.style}>{text.c.text}</span><span style={text.d.style}>{text.d.text}</span> <span style={text.e.style}>{text.e.text}</span> <span style={text.f.style}>{text.f.text}</span></h1>
                        <img data-atropos-offset="5" className='hero_image' src={hero} alt="main" />
                    </div>
                </Atropos>
            </div>

            {/* THIS IS 'REACT SCROLL' LINK FOR SMOOTH SCROLL */}
            <Link to={to} smooth={true} duration={500}>
                <img className='animation_arrow' src={arrow} alt='arrow' />
            </Link>

        </section>
    );
}

export default AnimationHero;
