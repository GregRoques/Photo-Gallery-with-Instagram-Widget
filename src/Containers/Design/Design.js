import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import { Link }  from 'react-router-dom';
import "./Design.css";

// Redux
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import SetHeader from '../../Actions/SetHeader'

class Design extends Component{

    setNewHeader = () =>{
        this.props.SetHeader("Editorial Work")
    }

    render(){
        return(
            <div className="fadeIn">
                {this.setNewHeader()}
                <Magazines/>
                <Photography/>
                <Articles/>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/portfolio"> Portfolio</Link>
                </div>
            </div>
        )
    }
    

}
function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
        SetHeader: SetHeader
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(Design);