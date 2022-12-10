import React from 'react';
import './SelectedWork.css';
import arrow from '../../images/arrow.svg';

function SelectedWork({ id, name, img, link }) {

    return (
        <div className='work_container'>
            <div className='work'>
                <div className='work_left'>
                    <h5>{id}</h5>
                    <div className='work_left_text'>
                        <p>React.JS</p>
                        <p>Custom CSS</p>
                    </div>
                    <img id='work_right_arrow' className='work_right_arrow' src={arrow} alt='arrow' />
                </div>
                <div className='work_right'>
                    <a href={link} target='_blank'>
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
