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

    state ={
        header: this.props.name
    }

    render(){
        return(
            <div className="header">
                <Link style={{ textDecoration: 'none' }} to="/"><span title="Home Page" className="leftNav">Greg Roques</span></Link>
                <div className ="rightNav">
                    <RightNav name={'Software Developer'}/>
                </div>
                
            </div>
        )
    }

}

export default Header;