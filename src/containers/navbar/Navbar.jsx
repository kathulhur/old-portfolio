import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css'

import logo from '../../assets/logo-white.svg'

const Menu = () => (
    <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="App__navbar">
            <div className="App__navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            
            <nav className="App__navbar-links">
                <Menu />
            </nav>
            <div className="App__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> 
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> 
                }
                {toggleMenu && (
                    <div className="App__navbar-menu_container scale-up-center">
                        <Menu />
                    </div>
                    
                    )
                
                
                }
            </div>
        </div>
    )
}


export default Navbar;