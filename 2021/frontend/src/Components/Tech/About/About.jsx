import React from 'react';
import { Link } from 'react-router-dom';
import cssAbout from './about.module.css';
import ImageLoader from '../../ImgLoader/imgLoader';

function getYearsofDevExperience(){
    const currYear = new Date().getFullYear();
    const yearsExperience = currYear - 2018;
    return yearsExperience;
}

const About = () => {
    return (
        <div>
            <div className={cssAbout.portraitCenterSmall}>
                <ImageLoader className={cssAbout.portrait} alt='Greg_Roques_Headshot' src='/images/headShots/myPic.jpg'/>
            </div>
            <div className={cssAbout.aboutMeHeader}>About</div>
                <div className={cssAbout.aboutMeText}>
                    <div></div> 
                    I am a software developer with more than {getYearsofDevExperience()} years of experience working with both front- and back-end technologies; 
                    these include HTML, CSS and JavaScript frameworks as well as {getYearsofDevExperience() -1 } years admin and development experience in the ServiceNow platform. 
                    Prior to this, I served 10 years as a creative director managing print and digital publications for both corporate and media enterprises, 
                    as well as nearly two decades as an award-winning contributing <Link to='/media'>writer</Link> and <Link to='/photography'>photographer</Link>.
                    <br/><br/>
                    Below are examples of my some of my freelance web projects, as well as a list of technologies I have worked with. 
                </div>     
        </div>
    );
}

export default About;
