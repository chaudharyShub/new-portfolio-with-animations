import React, { useContext } from 'react';
import './SelectedWork.css';
import arrow from '../../images/arrow.svg';
import { StateContext } from '../../App';

function SelectedWork({ id, name, img, link }) {

    const context = useContext(StateContext);
    const style = context.state.style;

    return (
        <div className='work_container' style={{ color: style.color }}>
            <div className='work' style={{ borderBottom: `1.5px solid ${style.color}` }}>
                <div className='work_left'>
                    <h5 style={{ color: style.color }}>{id}</h5>
                    <div className='work_left_text'>
                        <p style={{ borderBottom: `1px solid ${style.color}` }}>React.JS</p>
                        <p style={{ borderBottom: `1px solid ${style.color}` }}>Custom CSS</p>
                    </div>
                    <img id='work_right_arrow' className='work_right_arrow' src={style.arrow} alt='arrow' />
                </div>
                <div className='work_right'>
                    <a style={{ color: style.color }} href={link} target='_blank'>
                        <div className='work_right_image_container'>
                            <img className='thumbnail' src={img} alt="algoexpert" />
                        </div>
                        <p>{name}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SelectedWork;
