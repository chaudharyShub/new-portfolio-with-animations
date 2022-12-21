import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../App';
import './SelectedWork.css';


function SelectedWork({ id, name, img, link }) {

    const context = useContext(StateContext);
    const style = context.state.style;
    const windowWidth = window.innerWidth;

    const [color, setColor] = useState('#E3ECD4');
    const [translateArrow, setTranslateArrow] = useState(false);

    useEffect(() => {
        context.state.mode ? setColor('black') : setColor('#E3ECD4');
    }, [context.state.mode]);

    const handleMouseEnter = () => {
        setTranslateArrow(true);
        if (context.state.mode) {
            setColor('white');
            return;
        }
        setColor('#1D8BCF');
    };

    const handleMouseLeave = () => {
        setTranslateArrow(false);
        if (context.state.mode) {
            setColor('black');
            return;
        }
        setColor('#E3ECD4');
    };

    return (
        <div className='work_container' style={{ color: style.color, borderBottom: `1.5px solid ${style.color}` }}>
            <div className='work' data-aos="fade-up" data-aos-offset={windowWidth > 1024 && 200}>
                <div className='work_left'>
                    <h5 style={{ color: style.color }}>{id}</h5>
                    <div className='work_left_text'>
                        <p style={{ borderBottom: `1px solid ${style.color}` }}>React.JS</p>
                        <p style={{ borderBottom: `1px solid ${style.color}` }}>Custom CSS</p>
                    </div>

                    <img
                        id='work_right_arrow'
                        className='work_right_arrow'
                        src={style.arrow}
                        alt='arrow'
                        style={{
                            transform: translateArrow
                                ? 'rotate(-90deg) translateY(30px)'
                                : 'rotate(-90deg)'
                        }} />
                </div>

                <div className='work_right' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a style={{ color: style.color }} href={link} target='_blank'>
                        <div className='work_right_image_container'>
                            <img className='thumbnail' src={img === null ? style.homeMyPortfolio : img} alt="algoexpert" />
                        </div>
                        <p style={{ borderBottom: `2px solid ${color}` }}>{name}</p>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default SelectedWork;
