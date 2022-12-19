import React, { useContext } from 'react';
import { StateContext } from '../../../App';
import './Professional.css';


function Professional() {

    const context = useContext(StateContext);
    const style = context.state.style;

    return (
        <div className='professional_main' style={{ color: style.color }}>
            <h2>Coming</h2>
            <h2>Soon<span style={{ background: style.color }} className="dot"></span><span style={{ background: style.color }} className="dot"></span><span style={{ background: style.color }} className="dot"></span>
            </h2>
        </div>
    );
}

export default Professional;
