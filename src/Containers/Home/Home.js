import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import "./Home.css"

class Home extends Component{

    render(){
        return(
            <div className="homeBody">
                <div className="padding768 circlesJustify">
                    <div className="myStory"><span>About</span></div>
                </div>
                <div className="padding768 circlesJustify">
                    <div className="projects">Portfolio</div>
                </div>
                <div className="circlesJustify">
                    <div className="blog">Blog</div>
                </div>                
        </div>
        )
    }

}

export default Home;