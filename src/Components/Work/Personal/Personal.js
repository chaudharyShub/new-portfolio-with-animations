import React, { useContext } from 'react';
import { StateContext } from '../../../App';
import { personalWork } from '../../Details';
import './Personal.css';


function Personal() {

    const context = useContext(StateContext);
    const style = context.state.style;
    const windowWidth = window.innerWidth;
    const figmaLink = 'https://www.figma.com/file/TLg8T7F1sMvSJQSe6gYo1I/My-Portfolio?node-id=0%3A1&t=XJT8DWrQTksFDJxO-0';

    return (
        <section className='personal_main'>
            {
                personalWork.map((items, index) => {
                    const a = personalWork[1].content.split('|')
                    return (
                        <div key={items.sno} style={{ color: style.color }} data-aos="fade-up" data-aos-offset={windowWidth > 1024 && items.data_aos_offset} className='personal_main_inner_container'>
                            <h5 style={{ color: style.color, borderBottomColor: style.color }}>{items.sno}</h5>
                            <div className='personal_inner'>
                                <div className='personal_top'>
                                    <div className='personal_project_image_container'>
                                        <img src={items.image1 === null ? style.workMyPortfolio.a : items.image1} alt={`project ${index + 1}`} />
                                    </div>
                                    <a style={{ color: style.color, borderBottomColor: style.color }} href={items.link} target='_blank'>{items.heading}</a>
                                </div>
                                <div className='personal_bottom'>
                                    {
                                        items.content.includes('|')
                                            ? items.content.split('|') &&
                                            <p>{a[0]}
                                                <a href={figmaLink} target='_blank'>{a[1]}</a>
                                            </p>
                                            : <p>{items.content}</p>
                                    }
                                    <div style={windowWidth < 768 ? { borderTop: `1px solid ${style.color}` } : {}}>
                                        <img src={items.image2 === null ? style.workMyPortfolio.b : items.image2} />
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


