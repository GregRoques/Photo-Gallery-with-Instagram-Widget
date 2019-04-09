import React from "react";
import { Link }  from 'react-router-dom';
import "./About.css";

const About = (props) =>{
    return(
        
     <div className="fadeIn">
              <div>
              <img className="portrait" src="/images/aboutMePage/selfLowRes.png"/>
              </div>
              <div className="col-12 col-md-6 col-xl-7">
                  <div className="aboutMeHeader">Who Am I?</div>
                  <div className="aboutMeText">I am a former Creative Director turned software developer with more than 10 years of experience managing award-winning print and online publications. Primarily serving as an editor and art director in my previous positions, I began to witness a sharp shift from the printed page to the more modern digital canvas early in my career. After many years of editorial pivoting towards web content management and digital strategy, I decided to fully dedicate my creative energies towards the design and development of efficient, user-focussed software solutions. 
                          
                          In my free time I am an avid long distance runner and enjoy <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/editorial">writing and photography</Link>, cooking, concerts and exploring Atlanta’s many neighborhoods and restaurants with my wife. I am also a graphic design and photography volunteer with the Leukemia & Lymphoma Society.</div>
              </div>  
              <div className="col-12 mt-2">
                  <div className="aboutMeSkills">Front End</div>
                  <div className="lightGray">
                      <img className="skillIcon" src="/images/aboutMePage/html5.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/css3.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/bootstrap.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/sass.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/javascript.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/jquery.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/redux.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/react.png"/>
                  </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="aboutMeSkills">Back End</div>
                  <div className="lightGray">
                      <img className="skillIcon" src="/images/aboutMePage/python.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/nodejs.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/express.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/mysql.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/postgresql.png"/>
                  </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="aboutMeSkills">Adobe CC</div>
                  <div className="lightGray">
                      <img className="skillIcon" src="/images/aboutMePage/illustrator.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/indesign.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/photoshop.png"/>
                      <img className="skillIcon" src="/images/aboutMePage/Premiere.png"/>
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

export default About;
