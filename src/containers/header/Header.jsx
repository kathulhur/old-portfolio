import React from 'react';

import './header.css'
import linkedinIcon from '../../assets/bxl-linkedin.svg'
import gitIcon from '../../assets/bxl-github.svg'

const Header = () => {
    return (
        <div className="App__header section__margin">
            <h1>Joseph Karl Crisostomo</h1>
            <div className="App__header-titles">
                <p>Computer Science Student</p>
                <p>Software Developer</p>
                <p>Web Developer</p>
            </div>
            <div className="App__header-icons">
                <a href="<git>"><img src={gitIcon} id="git" alt="git icon"></img></a>
                <a href="<linkedin>"><img src={linkedinIcon} id="linkedin" alt="git linkedin"></img></a>
            </div>
        </div>
    )
}


export default Header;