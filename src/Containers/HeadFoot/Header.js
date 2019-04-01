import React, {Component} from "react";
import "./HeadFoot.css"

class Header extends Component{

    render(){
        return(
            <div className="header">
                <span className="leftNav">Software Developer</span>
                <p className="rightNav">Greg Roques</p>
            </div>
        )
    }

}

export default Header;