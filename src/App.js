import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';

// HOC
import Layout from "./Components/Layout/Layout";

// Actions
import { authCheckState } from './Actions/Auth'

// Visitor Pages
import Home from './Containers/Home/Home';
import About from './Containers/About/About'
    import Design from './Containers/About/SubPages/Design/Design' 
    import Photography from './Containers/About/SubPages/Photography/Photography'
    import Pictures from './Containers/Photography/Pictures'
import Portfolio from './Containers/Portfolio/Portfolio'
import Blog from './Containers/Blog/Blog'

// Backend Update for Blog
import Update from './Containers/SignIn/Update'

class App extends Component {

  state={
    entries:[]
  }

  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Home}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* HOC */}
         <Layout >
           <Switch>
               {/* Vistor Pages */}
                <Route path="/" exact component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Portfolio}/>
                <Route exact path="/media" component={Design}/>
              {/* Blog Routing */}
                <Route exact path="/blog" component={Blog}/>
                <Route exact path='/blog/:article' component={Blog}/>
              {/* Photography Routing */}
                <Route exact path="/photography" component={Photography}/>
                <Route exact path="/photography/:album" component={Pictures}/>
              {/* Backend Update Blog */}
                <Route exact path = '/user-update-blog' component={Update}/>
              {/* Re-Route Non-Existant Pages */}
                <Route exact path='/resume' component={() => { 
                    window.location.href = "https://www.gregroques.com/images/socialIcons/Resume.pdf"; 
                    return false;
                }}/>
                <Redirect path="/portfolio" push to={"/projects"}/>
                <Route component ={this.NoPage}/>
               
           </Switch>
        </Layout>
      </div>
    );
    
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp:() => dispatch(authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
