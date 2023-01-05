import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../App';
import './Navbar.css';


function Navbar() {

    const context = useContext(StateContext);
    const style = context.state.style;

    const toggleModeButtonStyle = {
        filter: 'invert(36%) sepia(98%) saturate(436%) hue-rotate(159deg) brightness(108%) contrast(95%)'
    }
    const navItems = ['home', 'about', 'work', 'contact'];

    const [menuOpen, setMenuOpen] = useState(false);
    const [hideMiddleHamburger, setHideMiddleHamburger] = useState(true);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [menuOpen]);

    const show = (e) => {
        if (e.target.innerText === 'DARK MODE' || e.target.innerText === 'LIGHT MODE') return;
        setHideMiddleHamburger(!hideMiddleHamburger);
        setMenuOpen(!menuOpen);
    }

    const handleClick = () => {
        if (context.state.mode) context.disableDarkMode();
        else context.enableDarkMode();
    }

    return (
        <div className='nav_main'>
            <Link style={{ color: style.color }} to='home'>Shubham Chaudhary</Link>
            <div className='desktop_nav'>
                <div></div>
                <div className='desktop_nav_links'>
                    <Link style={{ color: style.color, borderColor: style.color }} to='about'>About</Link>
                    <Link style={{ color: style.color, borderColor: style.color }} to='work'>Work</Link>
                    <button onClick={handleClick}>
                        <img style={!context.state.mode ? toggleModeButtonStyle : null} src={style.defaultToggleButton} alt='toggleMode' />
                    </button>
                    <Link style={{ color: style.color, borderColor: style.color }} to='contact'>Contact</Link>
                </div>
            </div>

            <div
                className={`${menuOpen ? 'active' : ''} navigation mobile_nav`}
                style={{ backgroundColor: context.state.mode ? 'black' : '#E3ECD4' }}
            >
                <button className={`${menuOpen ? 'open' : null} hamburger`} onClick={show}>
                    <div id="bar1" style={{ background: context.state.mode ? 'white' : '#1D8BCF' }} className="bar"></div>
                    <div id="bar2" style={hideMiddleHamburger ? { background: context.state.mode ? 'white' : '#1D8BCF' } : null} className="bar"></div>
                    <div id="bar3" style={{ background: context.state.mode ? 'white' : '#1D8BCF' }} className="bar"></div>
                </button>
                <nav>
                    <ul onClick={show}>
                        {navItems.map(items =>
                            <Link key={items} to={`${items}`}>
                                <li style={{ color: style.color }}>
                                    {items}
                                </li>
                            </Link>
                        )}
                        <li>
                            <button
                                style={{
                                    color: style.color,
                                    borderBottom: `2px solid ${style.color}`
                                }}
                                onClick={handleClick}>
                                {
                                    context.state.mode ? 'light mode' : 'dark mode'
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Navbar;
