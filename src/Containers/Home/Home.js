import React, {Component} from "react";
import "./Home.css"

class Home extends Component{

    render(){
        return(
            <div className="homeBody">
                <div className="${introAction1} padding768 circlesJustify">
                    <div className="myStory"><span>About</span></div>
                </div>
                <div className=" ${introAction2} padding768 circlesJustify">
                    <div className="projects">Portfolio</div>
                </div>
                <div className=" ${introAction3} circlesJustify">
                    <div className="blog">Blog</div>
                </div>                
        </div>
        )
    }

}

export default Home;