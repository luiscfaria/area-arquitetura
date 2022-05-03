import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/home-page.component';
import AboutPage from './pages/about/about-page.component'
import ProjectsPage from './pages/projects/projects-page.component';


class App extends Component {

  render() {    
    return (
      
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route exact path="/about"  element={<AboutPage />} />
            <Route exact path="/projetos"  element={<ProjectsPage />} /> 
                      
          </Routes>      
            
    );    
  }
}

export default App;