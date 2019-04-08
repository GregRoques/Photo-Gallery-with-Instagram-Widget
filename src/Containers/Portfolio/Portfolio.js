import React, { Component } from "react";
import "./Portfolio.css";


const myProjects = ["MealSleuth", "Dietactics", "Sift", "Pizza Cat"]

const headerImageLink = 'images/portfolioimages/'
const languageImageLink = 'images/aboutMePage/'

const projectDetails ={
    MealSleuth: {
        type: 'Front End',
        image: 'mealsleuth.png',
        description: `This project is a front-end only application designed to search for certain restaurants based on user input for location and price range. The application returns a result that matches the user's input and renders it within the browser. The user can then get directions to the resulting location via Google Maps.`,
        languages: ['html5.png', 'css3.png','javascript.png'],
        demo: 'http://sift.gregroques.com',
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'
    }
}

const ProjectList = ({name,click}) => {
    return (
        <div>
            <div onClick={()=>click(name)}>{name}</div>
        </div>                
    )
}

const ProjectOnDisplay = ({title}) =>{

    const display = projectDetails[title]

    return(
        <div>
            <h1>{display['type']}</h1>
            <img src= { headerImageLink + display['image'] }/>
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

class Portfolio extends Component{

    state = {
        currentProject: 'MealSleuth'
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