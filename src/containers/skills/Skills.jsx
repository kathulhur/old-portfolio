import React from 'react';

import './skills.css'
import { Header } from '../../components'

const Skills = () => {
    return (
        <div className="App__skills section__margin">
            <Header text="Skills"/>
            <div className="App__skills-container">
                <div>
                    <h3>Front End Development</h3>
                    <ul>
                        <li>Create webpages using HTML, CSS, and Javascript</li>
                        <li>Use Fetch API to display content</li>
                        <li>Use appropriate tags for contents</li>
                        <li>Transform Figma design into webpages</li>
                    </ul>
                </div>

                <div>
                    <h3>Back End Development</h3>
                    <ul>
                        <li>Create web application using ExpressJs and NestJs</li>
                        <li>Deploy web app in Heroku</li>
                    </ul>
                </div>

                <div>
                    <h3>Database</h3>
                    <ul>
                        <li>Create schema with MongoDb and SQL</li>
                        <li>Issue query in SQL and MongoDb</li>
                        <li>Setup Database Cloud hosting on MongoDb</li>
                    </ul>
                </div>

                <div>
                    <h3>Other Development skills</h3>
                    <ul>
                        <li>Create application using C# with WPF and Entity Framework</li>
                        <li>Have few experience using Django Framework</li>
                        <li>Experience using the languages: C, C++, C#, Python, Java, and Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Skills;