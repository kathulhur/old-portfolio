import React from 'react';

import './Header.css'

const Title = ({ text }) => {
    return (
        <div className="App__projects-heading">
            <h1>{text}</h1>
            <div></div>
        </div>
    );
}





export default Title;