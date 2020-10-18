import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';

// HOC
import Layout from "./Components/Layout/Layout";

// Actions
import { authCheckState } from './Actions/Auth'

// Visitor Pages
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
          <Redirect push to={Update}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* HOC */}
         <Layout >
           <Switch>
              <Route exact path = '/' component={Update}/>
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
