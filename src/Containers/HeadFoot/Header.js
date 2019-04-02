import React, {Component} from "react";
import "./HeadFoot.css"

class Header extends Component{

    render(){
        return(
            <div className="header">
                <span className="rightNav">Greg Roques</span>
                <span className="leftNav jobTitle">{`<!--Software Developer-->`}</span>
                
            </div>
        )
    }

}

export default Header;