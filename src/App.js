import React, { Component } from 'react';

import MainNavbar from './MainNavbar';
import Homepage from './Homepage';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar /> 
        <Homepage />       
        <Footer />
      </div>
    );
  }
}

export default App;
