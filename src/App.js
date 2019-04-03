import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Layout from "./Components/Layout/Layout";
import Home from './Containers/Home/Home';


class App extends Component {
  render() {
    return (
      <Router>
         <Layout>
           <Route path="/" component={Home}/>
        </Layout>
              
      </Router>
    );
  }
}

export default App;
