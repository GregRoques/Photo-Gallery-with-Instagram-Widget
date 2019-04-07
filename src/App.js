import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Layout from "./Components/Layout/Layout";
import Home from './Containers/Home/Home';
import About from './Containers/About/About'

class App extends Component {

  state = {
    rightNavHeader: "/"
  }

  getRoute = headerRoute =>{
    this.setState({
      rightNavHeader: headerRoute
    })
  }

  render() {
    return (
      <Router>
         <Layout name={this.rightNavHeader}>
           <Route sendRoute={this.getRoute} path="/" exact component={Home}/>
           <Route exact path="/about" component={About}/>
        </Layout>
      </Router>
    );
    
  }
}

export default App;
