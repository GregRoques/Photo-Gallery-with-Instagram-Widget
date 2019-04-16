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
        this.props.SetHeader("About");
        window.scrollTo(0, 0);
    }
    render(){
        return(
            
        <div className="fadeIn">
        <div className="aboutMeHeader t2">Who Am I?</div>
            <div className='aboutRows'>
                <div className='portraitContainer'>
                    <img className="portrait" src="/images/aboutMePage/selfLowRes.png" alt='Me'/>
                </div> 
                <div className='whoAmIContainer'>
                    <div className='whoAmIPadding'>
                        <div className="aboutMeHeader t1">Who Am I?</div>
                        <div className="aboutMeText">
                            I am a former creative director turned software developer with more than 10 years of experience managing award-winning print and online publications. Primarily serving as an editor and art director in my previous roles, I began to witness a sharp shift from the printed page to the more modern digital canvas early in my career. While serving as creative director for a local magazine, I took the lead in establishing the brand’s digital presence. I taught myself as much as I could about UI/Ux to ensure our interface and content best suited our readership, designed initial wireframes for the site, and learned HTML/CSS and basic JavaScript to optimize layouts and functionality within our CMS applications.  <span className='p1'>After several years of pivoting towards digital strategy while continually learning to code, I realized my passion was to dive further into the development of the systems I was directing. I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions.</span>
                        </div> 
                        <div className="aboutMeText b1">
                            In my free time I am an avid long distance runner and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/editorial">writing and photography</Link>, cooking, concerts and exploring Atlanta’s many neighborhoods and restaurants with my wife. I am also a graphic design and photography volunteer with the Leukemia & Lymphoma Society.
                        </div>
                    </div>
                </div>
                <div className="aboutMeText p2">
                    After several years of pivoting towards digital strategy while continually learning to code, I realized my passion was to dive further into the development of the systems I was directing. I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions.
                </div>
                <div className="aboutMeText b2">
                    In my free time I am an avid long distance runner and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/editorial">writing and photography</Link>, cooking, concerts and exploring Atlanta’s many neighborhoods and restaurants with my wife. I am also a graphic design and photography volunteer with the Leukemia & Lymphoma Society.
                </div>
            </div>  
            
            <div>
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
            <div className="aboutRows">
                <div className='aboutContainers'>
                    <div className="aboutMeSkills">
                        Back End
                    </div>
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
                <div className='aboutContainers'>
                    <div className="aboutMeSkills">
                        Adobe 
                    </div>
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