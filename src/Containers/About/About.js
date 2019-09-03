import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import "./About.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

const imageLink = '/images/technologies/'

const frontEnd = [
    'html5.png',
    'css3.png',
    'bootstrap.png',
    'javascript.png',
    'jquery.png',
    'angular.png', 
    'react.png',
    'redux.png'
]

const backEnd = [
    'nodejs.png',
    'express.png',
    'mongodb.png',
    'mysql.png'
]

const graphicDesign = [
    'illustrator.png',
    'indesign.png',
    'photoshop.png',
    'Premiere.png',
]

class About extends Component{
    
    componentDidMount() {
        this.props.Header("About");
        window.scrollTo(0, 0);
    }
    render(){
        return(
            
        <div className="fadeIn">
        <div className="aboutMeHeader aboutTitle2">Who Am I?</div>
            <div className='aboutRows'>
                <div className='portraitContainer'>
                    <img className="portrait" src="/images/selfLowRes.png" alt='Me'/>
                </div> 
                <div className='whoAmIContainer'>
                    <div className='whoAmIPadding'>
                        <div className="aboutMeHeader aboutTitle1">Who Am I?</div>
                        <div className="aboutMeText">
                            I am a former creative director turned software developer with more than 10 years of experience managing award-winning print and online publications. Primarily serving as an editor and art director in my previous roles, I began to witness a sharp shift from the printed page to the more modern digital canvas early in my career. While serving as creative director for a local magazine, I took the lead in establishing the brand’s digital presence. I taught myself as much as I could about UI/Ux to ensure our interface and content best suited our readership, designed initial wireframes for the site, and learned HTML/CSS and basic JavaScript to optimize layouts and functionality within our CMS applications.  <span className='aboutParagraph1'>After several years of pivoting towards digital strategy while continually learning to code, I realized my passion was to dive further into the development of the systems I was directing. I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions.</span>
                        </div> 
                        <div className="aboutMeText aboutCloser1">
                            In my free time I am an avid runner and <a target="_blank" rel="noopener noreferrer" href="https://november-project.com/atlanta-ga/">November Project</a> tribe member, and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/photography">photography</Link>, <a target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/profile/qtrMileAtATime">learning spanish</a> and exploring Atlanta’s many hiking/biking trails and restaurants with my wife. I am also a volunteer with the Leukemia & Lymphoma Society.
                        </div>
                    </div>
                </div>
                <div className="aboutMeText aboutParagraph2">
                    After several years of pivoting towards digital strategy while continually learning to code, I realized my passion was to dive further into the development of the systems I was directing. I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions.
                </div>
                <div className="aboutMeText aboutCloser2">
                In my free time I am an avid runner and <a target="_blank" rel="noopener noreferrer" href="https://november-project.com/atlanta-ga/">November Project</a> tribe member, and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/photography">photography</Link>, <a target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/profile/qtrMileAtATime">learning spanish</a> and exploring Atlanta’s many hiking/biking trails and restaurants with my wife. I am also a volunteer with the Leukemia & Lymphoma Society.
                </div>
            </div>  
            
            <div>
                <div className="aboutMeSkills">Front End</div>
                <div className="lightGray">
                {frontEnd.map((language, i) => {
                        const altText = language.replace(/\.[^/.]+$/, "")
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

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(About);
