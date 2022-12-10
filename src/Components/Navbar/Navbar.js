import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import dark_mode from '../../images/dark_mode.png';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ['home', 'about', 'work', 'contact'];

    const show = (e) => {
        if (e.target.innerText === 'DARK MODE' || e.target.innerText === 'LIGHT MODE') return;
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    const toggleModeButtonStyle = {
        filter: 'invert(36%) sepia(98%) saturate(436%) hue-rotate(159deg) brightness(108%) contrast(95%)'
    }

    return (
        <div className='nav_main'>
            <Link to='/'>Shubham Chaudhary</Link>
            <div className='desktop_nav'>
                <div></div>
                <div className='desktop_nav_links'>
                    <Link to='about'>About</Link>
                    <Link to='work'>Work</Link>
                    <button>
                        <img style={toggleModeButtonStyle} src={dark_mode} alt='toggleMode' />
                    </button>
                    <Link to='contact'>Contact</Link>
                </div>
            </div>
            <div className={`${menuOpen ? 'active' : ''} navigation mobile_nav`}>
                <button className={`${menuOpen ? 'open' : ''} hamburger`} onClick={show}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </button>
                <nav>
                    <ul onClick={show}>
                        {navItems.map(items =>
                            <li key={items}>
                                <Link to={`${items}`}>{items}</Link>
                            </li>
                        )}
                        <li><button>dark mode</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
