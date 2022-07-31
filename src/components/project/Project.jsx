import React from 'react';

import './Project.css';

const Project = ({ title, description, image, link }) => {
    return (
        <div className="App__projects-container_project">
            <div className="App__projects-container_project-img">
                <img src={image} alt="inventory management system"></img>
            </div>
            <div className="App__projects-container_project-content">
                <div>
                    <h2><a href={link}>{ title }</a></h2>
                    <p>{ description }</p>
                </div>
                <div>
                    <p><a href={link}>Visit Repository</a></p>
                </div>
            </div>
        </div>
    );
}


export default Project;