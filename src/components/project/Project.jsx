import React from 'react';

import './Project.css';

const Project = ({ title, description, image }) => {
    return (
        <div className="App__projects-container_project">
            <div className="App__projects-container_project-img">
                <img src={image}></img>
            </div>
            <div className="App__projects-container_project-content">
                <h2>{ title }</h2>
                <p>{ description }</p>
                <p>Visit Repository</p>
            </div>
        </div>
    );
}


export default Project;