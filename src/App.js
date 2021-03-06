import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/home-page.component';
import AboutPage from './pages/about/about-page.component'
import ProjectsPage from './pages/projects/projects-page.component';
import ServicesPage from './pages/services/services-page.component';
import TestimonialsPage from './pages/testimonials/testimonials-page.component';
import ContactPage from './pages/contact/contact-page.component';


class App extends Component {

  render() {    
    return (
      
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route exact path="/about"  element={<AboutPage />} />
            <Route exact path="/projetos"  element={<ProjectsPage />} />
            <Route exact path="/servicos"  element={<ServicesPage />} />
            <Route exact path="/depoimentos"  element={<TestimonialsPage />} />
            <Route exact path="/contato"  element={<ContactPage />} />  
                      
          </Routes>      
            
    );    
  }
}

export default App;