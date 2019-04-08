import React, { Component } from "react";
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
        languages: ['html5.png', 'css3.png','javascript.png','redux.png', 'redux.png','nodejs.png', 'express.png','postgresql.png'],
        demo: 'http://sift.gregroques.com',
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'
    },
    pizzaCat: {
        name: 'Intergalactic Adventures of Pizza Cat',
        type: 'Python',
        video: `pizzaCat`,
        description: `A horizontal side-scrolling shooter built in Python using the open-source video game library Pygame.`,
        languages: ['python.png', 'photoshop.png'],
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'

    }
}

// for constructing links with project details

const headerImageLink = 'images/portfolioimages/'
const languageImageLink = 'images/aboutMePage/'


// ================================= Populate selectable list
const ProjectList = ({name,click}) => {
    return (
        <div>
            <div onClick={()=>click(name)}>{name}</div>
        </div>                
    )
}

// ================================= Populate selected project

const ProjectOnDisplay = ({title}) =>{

    const display = projectDetails[title]

    if(display['type']==='Python'){
        return(
            <div>
            <h1>{display['type']}</h1>
            <video class="videoPortfolio" controls poster={headerImageLink + display['video']+'.png'} src={headerImageLink + display['video']+'.mp4'} type="video/mp4"/>
            <h2>{display['name']}</h2>
            <p>{display['description']}</p>
            {display['languages'].map(language => {
                return(
                    <img src= {languageImageLink + language}/>
                )
            })}
            <span><a target="_blank"  href={display['readMe']}>
                <button class="btn-info btn-md text-white">Read Me</button>
            </a></span>
        </div>
        )

    }else{
        return(
            <div>
                <h1>{display['type']}</h1>
                <img src= { headerImageLink + display['image'] }/>
                <h2>{display['name']}</h2>
                <p>{display['description']}</p>
                {display['languages'].map(language => {
                    return(
                        <img src= {languageImageLink + language}/>
                    )
                })}
                <span><a target="_blank"  href={display['demo']}>
                    <button class="btn-info btn-md text-white">Live Demo</button>
                </a></span>
                <span><a target="_blank"  href={display['readMe']}>
                    <button class="btn-info btn-md text-white">Read Me</button>
                </a></span>
            </div>
        )
    }
}

// ================================= define class and extend component

class Portfolio extends Component{

    state = {
        currentProject: 'mealsleuth'
    }

    displayProject = projectToDisplay =>{
        this.setState({
            currentProject: projectToDisplay
        })
    }

    render(){
        return(
            <div className="portfolioStyling">
                <div className="portfolioOptionMenu">
                    {myProjects.map(project => {
                        return(
                        <ProjectList 
                        name={project}
                        click={this.displayProject}/>
                        )
                    })}
                </div>
                <div>
                <ProjectOnDisplay title={this.state.currentProject}/>
                </div>
                
            </div>
        )
    }
}

export default Portfolio;