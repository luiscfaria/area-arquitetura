import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page.component';

class App extends Component {

  render() {    
    return (
      
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
                        
          </Routes>      
            
    );    
  }
}

export default App;