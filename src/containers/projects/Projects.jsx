import React from 'react';

import './projects.css'
import { Header, Project } from '../../components/index'
import inventoryManagementSystem from '../../assets/inventory-management-system.png'


const projectsData = [
    {
        title: "Inventory Management System",
        description: "An inventory management system that has functionality such as creating, reading, updating, and deleting data records. It also contains dashboard that shows an overview of the system, allowing instant view on business insights. Also, employees can have privileges which provides confidentiality and security of data.",
        image: inventoryManagementSystem,
        link: "https://github.com/kathulhur/ProjectLex-InventoryManagement"
    },
    {
        title: "Inventory Management System",
        description: "An inventory management system that has functionality such as creating, reading, updating, and deleting data records. It also contains dashboard that shows an overview of the system, allowing instant view on business insights. Also, employees can have privileges which provides confidentiality and security of data.",
        image: inventoryManagementSystem,
        link: "https://github.com/kathulhur/ProjectLex-InventoryManagement"
    }
]


const Projects = () => {
    return (
        <div className="App__projects section__padding" id="projects">
            <Header text="Projects"/>
            <div className="App__projects-container">
                {projectsData.map( (item, index) => (
                    <Project title={item.title} description={item.description} image={inventoryManagementSystem} key={item.title + index} link={item.link} />
                ))
                }
            </div>
        </div>
    );
}


export default Projects;