import React from 'react';

import './header.css'
import linkedinIcon from '../../assets/bxl-linkedin.svg'
import gitIcon from '../../assets/bxl-github.svg'

const Header = () => {
    return (
        <div className="App__header" id="home">
            <h1>Joseph Karl Crisostomo</h1>
            <div className="App__header-titles">
                <p>Computer Science Student</p>
                <p>Software Developer</p>
                <p>Web Developer</p>
            </div>
            <div className="App__header-icons">
                <a href="https://github.com/kathulhur"><img src={gitIcon} id="git" alt="git icon"></img></a>
                <a href="https://www.linkedin.com/in/joseph-karl-crisostomo-aa009021b/"><img src={linkedinIcon} id="linkedin" alt="git linkedin"></img></a>
            </div>
        </div>
    )
}


export default Header;