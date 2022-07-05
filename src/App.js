import React from 'react';

import { Navbar, Header, Projects, Skills, Footer } from './containers/index'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Projects />
            <Skills />
            <Footer />
        </div>
    )
}

export default App;