import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Layout from "./Components/Layout/Layout";
import Home from './Containers/Home/Home';
import About from './Containers/About/About'
import Portfolio from './Containers/Portfolio/Portfolio'

class App extends Component {



  render() {
    return (
      <Router>
         <Layout>
           <Route path="/" exact component={Home}/>
           <Route exact path="/about" component={About}/>
           <Route exact path="/portfolio" component={Portfolio}/>
        </Layout>
      </Router>
    );
    
  }
}

export default App;
