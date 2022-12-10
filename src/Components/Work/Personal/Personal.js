import React from 'react';
import { personalWork } from '../../Details';
import './Personal.css';

function Personal() {

    return (
        <section className='personal_main'>
            {
                personalWork.map((items, index) => {
                    return (
                        <div key={items.sno} className='personal_main_inner_container'>
                            <h5>{items.sno}</h5>
                            <div className='personal_inner'>
                                <div className='personal_top'>
                                    <div className='personal_project_image_container'>
                                        <img src={items.image1} alt={`project ${index + 1}`} />
                                    </div>
                                    <h3>{items.heading}</h3>
                                </div>
                                <div className='personal_bottom'>
                                    <p>{items.content}</p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h6>*****</h6>
        </section>
    );
}

export default Personal;
