import React, { Component } from "react";
import { Redirect }  from 'react-router-dom';
import { css } from "emotion";
import "./Home.css"

import MetaTags from 'react-meta-tags';

// Redux
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import SetHeader from '../../Actions/SetHeader'

const disappearTime = 1;

const disappearingClass = css`
    opacity: 0;
    transition: ${disappearTime}s all;
`;

const scalingClass = css`
    transform: scale(0);
    transition: 0.75s all;
`;

const pages = ["About", "Portfolio", "Blog"]

const Circle = ({name, handler, className}) => {
    const lowerCaseName = name.toLowerCase();
    return (
        <div className={`padding768 circlesJustify ${className}`}>
            <div onClick={ () => handler(lowerCaseName)} className={`${lowerCaseName} innerCircle`}>{name}</div>
        </div>                
    )
}
class Home extends Component{

    componentDidMount() {
        this.props.SetHeader("Software Developer");
        window.scrollTo(0, 0);
    }
    state = {
        thisCategory: '/',
        nextPage: false,
        redirect: false    
    }

    pageHandler = nextPage => {

        const stateObj = {
            nextRoute: nextPage,
            nextPage: true,
        }

        pages.forEach(page => {
            let lowerCase = page.toLowerCase()
            if (lowerCase === nextPage) {
                stateObj[`${lowerCase}Class`] = scalingClass
            } else {
                stateObj[`${lowerCase}Class`] = disappearingClass
            }
        })

        this.setState(stateObj)

        setTimeout(() => {
            this.setState({redirect: true})
        }, 1000 * disappearTime)        
    }
    
    render(){
        return(
            <div className="homeBody fadeIn">

                <MetaTags>
                    <meta property="og:site_name" content="Greg Roques"/>
                    <meta property="og:title" content="Software Developer"/>
                    <meta property="og:description" content="Software Developer and Graphic Artist living and building in Atlanta, GA."/>
                    <meta property="og:image" content="public/socialLink.png"/>
                    <meta property="og:url" content="http://www.GregRoques.com/"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </MetaTags>
            
                {this.state.redirect && <Redirect push to={`${this.state.nextRoute}`}/>}
                {pages.map((page, i)=>{
                    let className = this.state[`${page.toLowerCase()}Class`]
                    return (
                        <Circle 
                            key ={i}
                            handler={this.pageHandler}
                            className={className}
                            name={page}                            
                        />    
                    )
                }
                )}                
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

export default connect(null, mapDispatchToProps)(Home);