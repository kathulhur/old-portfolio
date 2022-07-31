import React from 'react';

import './projects.css'
import { Header, Project } from '../../components/index'
import inventoryManagementSystem from '../../assets/inventory-management-system.png'
import urlShortener from '../../assets/url-shortener.png'
import portfolioWebsite from '../../assets/portfolio-website.png'

const projectsData = [
    {
        title: "Inventory Management System",
        description: "An inventory management system that has functionality such as creating, reading, updating, and deleting data records. It also contains dashboard that shows an overview of the system, allowing instant view on business insights. Also, employees can have privileges which provides confidentiality and security of data.",
        image: inventoryManagementSystem,
        link: "https://github.com/kathulhur/ProjectLex-InventoryManagement"
    },
    {
        title: "URL Shortener API",
        description: "A URL shortener API containing functionality such as shortening URL and retrieving URL information given the code.",
        image: urlShortener,
        link: "https://github.com/kathulhur/url-shortener"
    },
    {
        title: "Portfolio",
        description: "A responsive portfolio website built using ReactJS and designed using CSS3. This showcases projects, skills, interests, and other personal information",
        image: portfolioWebsite,
        link: "https://github.com/kathulhur/kathulhur.github.io"
    }
]


const Projects = () => {
    return (
        <div className="App__projects" id="projects">
            <Header text="Projects"/>
            <div className="App__projects-container">
                {projectsData.map( (item, index) => (
                    <Project title={item.title} description={item.description} image={item.image} key={item.title + index} link={item.link} />
                ))
                }
            </div>
        </div>
    );
}


export default Projects;