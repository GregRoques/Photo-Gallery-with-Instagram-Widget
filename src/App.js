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
    import Design from './Containers/Design/Design' //subpage hyperlinked in bio on "about" page
import Portfolio from './Containers/Portfolio/Portfolio'
import Blog from './Containers/Blog/Blog'
  import { read } from './AxiosOrders';

// Backend Update for Blog
import Update from './Containers/SignIn/Update'

class App extends Component {

  state={
    entries:[]
  }

  componentDidMount(){
    this.props.onTryAutoSignUp();
    
      read.get()
      .then(response=>{
          const blogReturn = Object.values(response.data.users)[0]
          this.setState({
              entries: blogReturn 
          })
      })
      .catch(error=> {
          console.log('Error Loading Blog');
      })
  }


  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Home}/>
      </div>
    )
  }

  render() {
    const currentEntryValue = Object.keys(this.state.entries).length - 1
    const article =  Object.keys(this.state.entries)[currentEntryValue]
    return (
      <div>
        {/* HOC */}
         <Layout >
           <Switch>
               {/* Vistor Pages */}
              <Route path="/" exact component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/media" component={Design}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              {/* Blog Routing */}
              <Route exact path="/blog" 
                component={()=> window.location.href = `http://localhost:3000/blog/${article}`}
              />
              <Route exact path='/blog/:article' 
              render={(routeProps)=> <Blog {...routeProps} articles={this.state.entries} />}/>
              {/* Backend Update Blog */}
              <Route exact path = '/user-update-blog' component={Update}/>
              {/* Re-Route Non-Existant Pages */}
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
