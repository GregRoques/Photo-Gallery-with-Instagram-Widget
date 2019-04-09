import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import "./Portfolio.css";

// =============================== Projects displayed on this page

const myProjects = ["mealsleuth", "dietactics", "sift", "pizzaCat"]

const projectDetails ={
    mealsleuth: {
        name: 'MealSleuth',
        type: 'Front End',
        image: 'mealsleuth.png',
        description: `This project is a front-end application designed to search for certain restaurants based on user input for location and price range. The application returns a result that matches the user's input and renders it within the browser. The user can then get directions to the resulting location via Google Maps.`,
        languages: ['html5.png', 'css3.png','javascript.png'],
        demo: 'https://www.gregroques.com/mealsleuth',
        readMe: 'https://github.com/GregRoques/MealSleuth/blob/master/README.md'
    },
    dietactics: {
        name: 'DIETactics',
        type: 'Full Stack',
        image: 'dietactics.png',
        description: `DIETactics is a full stack web application utilizing mySQL, Node.Js, and Express. Users are able to create diet plans based on their input (current weight, height, target weight, etc.). Users can log into their profile and view/update their progress on their current diet.`,
        languages: ['html5.png', 'css3.png','javascript.png', 'nodejs.png', 'express.png','mysql.png'],
        demo: 'http://dietactics.gregroques.com',
        readMe: 'https://github.com/GregRoques/DIETactics/blob/master/README.md'
    },
    sift: {
        name: 'Sift',
        type: 'Full Stack',
        image: 'sift.png',
        description: `Sift is a PERN stack web application that allows users to organize their leisure acitivities by category. Once the user is in that category, they are able to create to do lists with notes, create favorite lists and write their own personal reviews.`,
        languages: ['html5.png', 'css3.png','javascript.png','react.png', 'redux.png','nodejs.png', 'express.png','postgresql.png'],
        demo: 'http://sift.gregroques.com',
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'
    },
    pizzaCat: {
        name: 'Intergalactic Adventures of Pizza Cat',
        type: 'Python',
        image: `pizzaCat.png`,
        video: `pizzaCat.mp4`,
        description: `A horizontal side-scrolling shooter built in Python using the open-source video game library Pygame.`,
        languages: ['python.png','pygame.png', 'photoshop.png'],
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'

    }
}

// ================================= for constructing links with project details

const headerImageLink = 'images/portfolioimages/'
const languageImageLink = 'images/aboutMePage/'


// ================================= Populate selectable circles

const ProjectList = ({name, click, hover, offHover}) => {

    return (
        <div>
            <div className={`optionCircles ${name}BackgroundImage`} onClick={()=>click(name)} onMouseOut={()=>offHover()} onMouseOver={()=>hover(name)}>
            </div>
        </div>                
    )
}

// ================================= Populate selected project

const ProjectOnDisplay = ({title}) =>{

    const display = projectDetails[title]

    if(display['type']==='Python'){
        return(
            <div className='grayColumnContent'>
                <div className= 'grayColumns'>
                    <video class="picPortfolio" controls poster={headerImageLink + display['image']} src={headerImageLink + display['video']} type="video/mp4"/>
                </div>
                <div className='grayColumns'>
                    <div className="profileProjectName">{display['name']}</div>
                    <div className="profileHeader">// {display['type']}</div>
                    <div className='profileParagraphFont'>{display['description']}</div>
                    
                    <div className='buttonAlign'>
                    <span><a target="_blank"  href={display['readMe']}>
                        <button class="demoReadButtons">Read Me</button>
                    </a></span>
                    </div>
                </div>
                {display['languages'].map(language => {
                    return(
                        <img className='devStyle' src= {languageImageLink + language}/>
                    )
                })}
            </div>
        )

    }else{
        return(
            <div className='grayColumnContent'>
                <div className= 'grayColumns'>
                    <img className="picPortfolio" src= { headerImageLink + display['image'] }/>
                </div>
                <div className='grayColumns'>
                    <div className="profileProjectName">{display['name']}</div>
                    <div className="profileHeader">// {display['type']}</div>
                    <div className='profileParagraphFont'>{display['description']}</div>

                    <div className='buttonAlign'>
                    <span><a target="_blank"  href={display['demo']}>
                        <button class="demoReadButtons">Live Demo</button>
                    </a></span>
                    <span><a target="_blank"  href={display['readMe']}>
                        <button class="demoReadButtons">Read Me</button>
                    </a></span>
                    </div>
                </div>
                    {display['languages'].map(language => {
                        return(
                            <img className='devStyle' src= {languageImageLink + language}/>
                        )
                    })}
            </div>
        )
    }
}

// ================================= define class and extend component

class Portfolio extends Component{

    state = {
        hoverProject: '',
        currentProject: 'mealsleuth'
    }

    displayProject = projectToDisplay =>{
        this.setState({
            currentProject: projectToDisplay
        })
    }

    displayHover = hoveringTitle =>{
      this.setState({
            hoverProject: projectDetails[hoveringTitle]['name']
        })
    }

    displayHoverOff = () =>{
        this.setState({
            hoverProject: ""
        })
    }

    render(){
        return(
            <div className="portfolioStyling fadeIn">
                <div className="circleContainer">
                    {myProjects.map(project => {
                        return(
                        <ProjectList 
                        name={project}
                        click={this.displayProject}
                        hover={this.displayHover}
                        offHover={this.displayHoverOff}
                        />
                        )
                    })}
                </div>
                <div className="hoverPageLine">
                    {this.state.hoverProject}
                </div>
                <div className='parameters'>
                    <div className="profileRowBackground">
                        <ProjectOnDisplay title={this.state.currentProject}/>
                    </div>
                </div>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/about"> About</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/blog"> Blog</Link>
                </div>
                
            </div>
        )
    }
}

export default Portfolio;