import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Layout from "./Components/Layout/Layout";
import Home from './Containers/Home/Home';
import About from './Containers/About/About'

class App extends Component {
  render() {
    return (
      <Router>
         <Layout>
         {console.log(window.location.pathname)}
           <Route path="/" exact component={Home}/>
           <Route exact path="/about" component={About}/>
        </Layout>
      </Router>
    );
    
  }
}

export default App;
