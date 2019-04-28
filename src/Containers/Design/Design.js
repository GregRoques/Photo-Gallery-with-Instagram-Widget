import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import { Link }  from 'react-router-dom';
import "./Design.css";

import MetaTags from 'react-meta-tags';

// Redux
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import SetHeader from '../../Actions/SetHeader'

class Design extends Component{

    componentDidMount() {
        this.props.SetHeader("Editorial Work");
        window.scrollTo(0, 0);
    }



    render(){
        return(
            <div className="fadeIn">
                <MetaTags>
                    <meta property="og:site_name" content="Greg Roques"/>
                    <meta property="og:title" content="Software Developer"/>
                    <meta property="og:description" content="Graphic Design, Photography, and Entertainment Writing Samples."/>
                    <meta property="og:image" content="public/socialLink.png"/>
                    <meta property="og:url" content="http://www.GregRoques.com/editorial"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </MetaTags>
                <Magazines/>
                <Photography/>
                <Articles/>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/about"> About</Link>
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