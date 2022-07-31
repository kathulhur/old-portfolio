import React from 'react';

import { Navbar, Header, Projects, Skills, Footer } from './containers/index'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="App-content__margin">
                <Navbar />
                <hr/>
                <Header />
                <Projects />
                <Skills />
            </div>
            <Footer />
        </div>
    )
}

export default App;