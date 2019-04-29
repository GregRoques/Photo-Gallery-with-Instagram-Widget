import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';

import Layout from "./Components/Layout/Layout";
import Home from './Containers/Home/Home';
import About from './Containers/About/About'
    import Design from './Containers/Design/Design'
import Portfolio from './Containers/Portfolio/Portfolio'
import Blog from './Containers/Blog/Blog'

class App extends Component {

  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Home}/>
      </div>
    )
  }

  render() {
    return (
      <Router>
         <Layout >
           <Switch>
              <Route path="/" exact component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/editorial" component={Design}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/blog" component={Blog}/>
              <Route component ={this.NoPage}/>
           </Switch>
        </Layout>
      </Router>
    );
    
  }
}

export default App;
