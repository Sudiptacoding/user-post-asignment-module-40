import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler")
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        // toggle animation
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }
    return (
        <nav className="nav">
            <Link to='/' className="nav_brand">Sudipta</Link>

            <ul className={active}>
                <li className="nav_item"><Link to='/' className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to='/about' className="nav_link">About</Link></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;