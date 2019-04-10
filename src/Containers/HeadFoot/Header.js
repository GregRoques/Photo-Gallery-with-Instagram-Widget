import React, {Component} from "react";
import { Link }  from 'react-router-dom';
import "./HeadFoot.css"

const RightNav = ({name}) =>{
    return(
        <div className="typeTitle">
            {`<!--`}{name}{`-->`}
        </div>
    )
}
class Header extends Component{ 

    render(){
        return(
            <div className="header">
                <Link style={{ textDecoration: 'none' }} to="/"><div title="Home Page" className="leftNav">Greg Roques</div></Link>
                <div className ="rightNav">
                    <RightNav name={'Software Developer'}/>
                </div>
                
            </div>
        )
    }

}

export default Header;