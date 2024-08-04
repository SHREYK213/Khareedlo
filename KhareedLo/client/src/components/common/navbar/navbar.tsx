import React,{useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHome } from 'react-icons/ai';

function NavBar() {

    const [expanded, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
        window.removeEventListener("scroll", scrollHandler);
        }
    }, []);
    
    function toggleNavbar() {
        updateExpanded(!expanded);
    }

    return(
        <nav className={navColour ? "sticky" : "navbar"}
        >
            <div className="navbar-container">
                <div className="brand">KhareedLo</div>
            <div aria-controls="responsive-navbar-nav" className='navbar-toggle'
            onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div id="responsive-navbar-nav">
        <div className={`nav-links ${expanded ? "expanded" : ""}`}>
            <div className="home">
                <AiOutlineHome />
            </div>
        </div>
        </div>
            </div>
        </nav>
    )
}

export default NavBar;