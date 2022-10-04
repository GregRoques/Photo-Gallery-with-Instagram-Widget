import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// HOC
import Layout from "./Containers/Layout/Layout";
// Visitor Pages
import Design from './Components/Tech/Tech';
import Media from './Components/Media/Media'; 
import Photography from './Components/Photography/Photography'
import Pictures from './Components/Photography/Pictures'


class App extends Component {

  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Design}/>
      </div>
    )
  }

  render() {
    return (
      <div>
         <Layout >
           <Switch>
                <Route path="/" exact component={Design}/>
                <Route exact path="/media" component={Media}/>
                <Route exact path="/photography" component={Photography}/>
                <Route exact path="/photography/:album" component={Pictures}/>
                <Route exact path='/resume' component={() => { 
                    window.location.href = "https://docs.google.com/document/d/e/2PACX-1vQbXTRzdV-BcC8i2GIAHkoCZ_nA4n3l3oNsjpguv29am3AyN2VGstlp2um-pzmR9uWFPoAkmJ905Wq3/pub"; 
                    return false;
                }}/>
                <Route exact path='/wyat' component={() => { 
                    window.location.href = "https://docs.google.com/spreadsheets/d/1ey-JcA2sPh-obkTomBQGvRI5k5BcThD-VcMA8Oi7raU/edit#gid=0"; 
                    return false;
                }}/>
                <Route component ={this.NoPage}/>
           </Switch>
        </Layout>
      </div>
    );
    
  }
}

export default App;
