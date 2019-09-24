import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import "./About.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

const imageLink = '/images/technologies/'

const mySkills = {

    frontEnd: {  
        name: "Front End",
        tech: [
            'html5.png',
            'css3.png',
            'bootstrap.png',
            'javascript.png',
            'jquery.png',
            'angular.png', 
            'react.png',
            'redux.png'
        ]
    },

    backEnd: {  
        name: "Back End",
        tech: [
            'nodejs.png',
            'express.png',
            'mongodb.png',
            'mysql.png'
        ]
    },

    graphicDesign: {
        name: "Graphic Design",
        tech: [
            'illustrator.png',
            'indesign.png',
            'photoshop.png'
        ]
    },

    digitalMarketing: {
        name: "Digital Marketing",
        tech: [
            'googleAnalytics.png',
            'googleAds.png',
            'facebook.png'
        ]
    },
}

class About extends Component{
    
    componentDidMount() {
        this.props.Header("About");
        window.scrollTo(0, 0);
    }
    render(){
        return(
        <div className="fadeIn">
            <div className="bioGrid">
                <div className="portrait portraitDisappear"/>
                <img className="part2" alt="myPic" src="/images/selfLowRes.png"/>
                <div className='whoAmIPadding'>
                    <div className="aboutMeHeader">About Me</div>
                    <div className="aboutMeText">
                        <div>I am a front-end developer & graphic designer specializing in the MERN stack (MySQL, Express, React, Node). I also bring more than 10 years of experience managing award-winning print and digital publications to developing efficient, user-friendly software solutions.</div> 
                        <div>In my free time I am an avid long distance runner, and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/photography">photography</Link>, learning spanish, and exploring Atlanta with my wife.</div>
                    </div>     
                </div>
            </div>
            <div className="aboutRows">
                { Object.keys(mySkills).map((skills, i) => {
                    const { name , tech } = mySkills[skills]
                    console.log(name, tech)
                    return (
                        <div className={ name !== "Front End" ? "aboutContainers" : "aboutStack" } id ={`skills${i}`}>
                            <div className="aboutMeSkills">{name}</div>
                            <div className="lightGray">
                                {(tech).map((language, i) => {
                                    const altText = language.replace(/\.[^/.]+$/, "")
                                    return(
                                        <img className='skillIcon' id={`${name}Tech${i}`} src= {imageLink + language} alt={altText}/>
                                    )
                                })}
                            </div>
                        </div>
                    )})}
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
