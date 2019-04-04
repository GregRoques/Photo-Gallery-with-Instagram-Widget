import React, {Component} from "react";
import "./HeadFoot.css"


class Header extends Component{ 

    render(){
        return(
            <div className="header">
                <span className="leftNav">Greg Roques</span>
                <span className="rightNav">{`<!--Software Developer-->`}</span>
                
            </div>
        )
    }

}

export default Header;