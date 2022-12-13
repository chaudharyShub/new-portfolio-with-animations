import React, { useContext } from 'react';
import { StateContext } from '../../../App';
import { personalWork } from '../../Details';
import './Personal.css';

function Personal() {

    const context = useContext(StateContext);
    const style = context.state.style;

    return (
        <section className='personal_main'>
            {
                personalWork.map((items, index) => {
                    return (
                        <div key={items.sno} style={{ color: style.color }} className='personal_main_inner_container'>
                            <h5 style={{ color: style.color, borderBottom: `1.2px solid ${style.color}` }}>{items.sno}</h5>
                            <div className='personal_inner'>
                                <div className='personal_top'>
                                    <div className='personal_project_image_container'>
                                        <img src={items.image1} alt={`project ${index + 1}`} />
                                    </div>
                                    <a style={{ color: style.color }} href={items.link} target='_blank'>{items.heading}</a>
                                </div>
                                <div className='personal_bottom'>
                                    <p>{items.content}</p>
                                    <div>
                                        <img src={items.image2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h6 style={{ color: style.color }}>*****</h6>
        </section>
    );
}

export default Personal;

// https://www.figma.com/file/TLg8T7F1sMvSJQSe6gYo1I/My-Portfolio?node-id=0%3A1