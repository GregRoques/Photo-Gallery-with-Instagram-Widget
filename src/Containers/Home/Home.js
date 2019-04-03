import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';

import "./Home.css"

import About from '../About/About'
import Blog from '../Blog/Blog'
import Portfolio from '../../Components/Portfolio/Portfolio'

class Home extends Component{

    render(){
        return(
        <Router>
                <div className="homeBody">
                    <div className="padding768 circlesJustify">
                    <Link style={{ textDecoration: 'none' }} to="about"><div className="myStory"><span>About</span></div></Link> 
                    </div>
                    <div className="padding768 circlesJustify">
                        <Link style={{ textDecoration: 'none' }} to="portfolio"><div className="projects">Portfolio</div></Link>
                    </div>
                    <div className="circlesJustify">
                        <Link style={{ textDecoration: 'none' }} to="blog"><div className="blog">Blog</div></Link>
                    </div>                
                </div>
                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/blog" component={Blog}/>
            </Router>
        )
    }

}

export default Home;