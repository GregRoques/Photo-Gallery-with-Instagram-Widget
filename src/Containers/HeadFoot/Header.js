import React, {Component} from "react";
import { Link }  from 'react-router-dom';
import "./HeadFoot.css"

import {connect} from 'react-redux';


var RightNav = ({name}) =>{
    return(
        <div className='typeTitle'>
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
                    <RightNav name={this.props.currentHeader}/>
                </div>
                
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        currentHeader: state.header
    }
}

export default connect(mapStateToProps) (Header);