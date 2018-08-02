import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom";

import MainNavbar from './MainNavbar';
import Homepage from './Homepage';
import Footer from './Footer';
import Projects from './Projects';
import Blog from './Blog';
import Bot from './Bot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar /> 
        <Bot/>
        <Router>
          <div>
          <Route exact path={"/"} component={Homepage}></Route>
          <Route exact path={"/projects"} component={Projects}></Route>
          <Route exact path={"/blog"} component={Blog}></Route>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
