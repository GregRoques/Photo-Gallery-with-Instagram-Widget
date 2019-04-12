import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import "./About.css";

// Redux
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import SetHeader from '../../Actions/SetHeader'

const imageLink = '/images/aboutMePage/'

const frontEnd = [
    'html5.png',
    'css3.png',
    'bootstrap.png',
    'sass.png',
    'javascript.png',
    'jquery.png',
    'react.png',
    'redux.png', 
]

const backEnd = [
    'python.png',
    'nodejs.png',
    'express.png',
    'mysql.png',
    'postgresql.png',
]

const graphicDesign = [
    'illustrator.png',
    'indesign.png',
    'photoshop.png',
    'Premiere.png',
]

class About extends Component{
    componentDidMount() {
        this.props.SetHeader("About")
    }
    render(){
        return(
            
        <div className="fadeIn">
            <div>
            <img className="portrait" src="/images/aboutMePage/selfLowRes.png" alt='Me'/>
            </div>
            <div className="col-12 col-md-6 col-xl-7">
                <div className="aboutMeHeader">Who Am I?</div>
                <div className="aboutMeText">I am a former Creative Director turned software developer with more than 10 years of experience managing award-winning print and online publications. Primarily serving as an editor and art director in my previous positions, I began to witness a sharp shift from the printed page to the more modern digital canvas early in my career. After many years of editorial pivoting towards web content management and digital strategy, I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions. 
                        
                        In my free time I am an avid long distance runner and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/editorial">writing and photography</Link>, cooking, concerts and exploring Atlanta’s many neighborhoods and restaurants with my wife. I am also a graphic design and photography volunteer with the Leukemia & Lymphoma Society.</div>
            </div>  
            <div className="col-12 mt-2">
                <div className="aboutMeSkills">Front End</div>
                <div className="lightGray">
                {frontEnd.map((language, i) => {
                        const altText = language.replace(/\.[^/.]+$/, "")
                        // console.log(altText)
                        return(
                            <img className='skillIcon' key={i} src= {imageLink + language} alt={altText}/>
                        )
                    })}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="aboutMeSkills">Back End</div>
                <div className="lightGray">
                {backEnd.map((language,i) => {
                        const altText = language.replace(/\.[^/.]+$/, "")
                        // console.log(altText)
                        return(
                            <img className='skillIcon' key={i} src= {imageLink + language} alt={altText}/>
                            )
                        })}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="aboutMeSkills">Adobe CC</div>
                <div className="lightGray">
                {graphicDesign.map((language,i) => {
                        const altText = language.replace(/\.[^/.]+$/, "")
                        // console.log(altText)
                        return(
                            <img className='skillIcon' key={i} src= {imageLink + language} alt={altText}/>
                            )
                        })}
                </div>
            </div>
            <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/portfolio"> Portfolio</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/blog"> Blog</Link>
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

export default connect(null, mapDispatchToProps)(About);
