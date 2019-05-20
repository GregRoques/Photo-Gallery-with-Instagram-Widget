import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';

// HOC
import Layout from "./Components/Layout/Layout";

// Visitor Pages
import Home from './Containers/Home/Home';
import About from './Containers/About/About'
    import Design from './Containers/Design/Design' //subpage hyperlinked in bio on "about" page
import Portfolio from './Containers/Portfolio/Portfolio'
import Blog from './Containers/Blog/Blog'

// Backend Update for Blog
import User from './Containers/User/User'

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
        {/* HOC */}
         <Layout >
           <Switch>
               {/* Vistor Pages */}
              <Route path="/" exact component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/media" component={Design}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/blog" component={Blog}/>
              {/* Backend Update Blog */}
              <Route exact path = '/user-update-blog' component={User}/>
              {/* Re-Route Non-Existant Pages */}
              <Route component ={this.NoPage}/>
           </Switch>
        </Layout>
      </Router>
    );
    
  }
}

export default App;
