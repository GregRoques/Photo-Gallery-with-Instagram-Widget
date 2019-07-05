import React, { Component } from 'react';
import css from './Photography.module.css'

import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Photography extends Component{

    componentDidMount() {
        this.props.Header("Photography");
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className = { css.fadeIn }>
                <div className = { css.galleryContainer }>
                    <div className = { css.gridContainer }>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                        <div className= {css.box }/>
                    </div>
                    <div className = { css.socialIcon}>
                        <span>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/qtrmileatatime/">
                                <img alt="Instagram @QtrMileAtATime" src="images/socialIcons/instagram.png"/> @qtrmileatatime
                            </a>                            
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(Photography);