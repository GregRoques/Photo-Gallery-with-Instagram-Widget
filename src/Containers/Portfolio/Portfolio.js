import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import "./Portfolio.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'


// =============================== Projects displayed on this page

const myProjects = ["mealsleuth", "dietactics", "sift", "pizzaCat"]

const projectDetails ={
    mealsleuth: {
        name: 'MealSleuth',
        type: 'Front End',
        image: 'mealsleuth',
        description: `This project is a front-end application designed to search for certain restaurants based on user input for location and price range. The application returns a result that matches the user's input and renders it within the browser. The user can then get directions to the resulting location via Google Maps.`,
        languages: ['html5.png', 'css3.png','javascript.png'],
        demo: 'https://www.gregroques.com/mealsleuth',
        readMe: 'https://github.com/GregRoques/MealSleuth/blob/master/README.md'
    },
    dietactics: {
        name: 'DIETactics',
        type: 'Full Stack',
        image: 'dietactics',
        description: `DIETactics is a full stack web application utilizing mySQL, Node.Js, and Express. Users are able to create diet plans based on their input (current weight, height, target weight, etc.). Users can log into their profile and view/update their progress on their current diet.`,
        languages: ['html5.png', 'css3.png','javascript.png', 'nodejs.png', 'express.png','mysql.png'],
        demo: 'http://dietactics.gregroques.com',
        readMe: 'https://github.com/GregRoques/DIETactics/blob/master/README.md'
    },
    sift: {
        name: 'Sift',
        type: 'Full Stack',
        image: 'sift',
        description: `Sift is a PERN stack web application that allows users to organize their leisure acitivities by category. Once the user is in that category, they are able to create to do lists with notes, create favorite lists and write their own personal reviews.`,
        languages: ['html5.png', 'css3.png','javascript.png','react.png', 'redux.png','nodejs.png', 'express.png','postgresql.png'],
        demo: 'http://sift.gregroques.com',
        readMe: 'https://github.com/GregRoques/Sift/blob/master/readme.md'
    },
    pizzaCat: {
    name: `Intergalactic Adventures of Pizza Cat`,
        type: 'Python',
        image: `pizzacat.png`,
        video: `https://www.youtube.com/watch?v=Dq9bCD_Iibw`,
        description: `A horizontal side-scrolling shooter built in Python using the open-source video game library Pygame.`,
        languages: ['python.png','pygame.png', 'photoshop.png'],
        readMe: 'https://github.com/GregRoques/Pizza-Cat-Python-Project/blob/master/README.md'

    }
}

// ================================= for constructing links with project details

const headerImageLink = 'images/portfolioImages/'
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
                <div className= 'vidContentColumns'>
                    <img className="vidPortfolio" src={headerImageLink + display['image']}  alt={display['name']}/>
                </div>
                <div className='vidContentColumns'>
                    <div className="profileProjectName">{display['name']}</div>
                    <div className="profileHeader">{'//'} {display['type']}</div>
                    <div className='profileParagraphFont'>{display['description']}</div>
                </div>
                <div className='pizzaCatButtonAlign'>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                        <button className="demoReadButtons">Read Me</button>
                    </a></span>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['video']}>
                        <button className="demoReadButtons">Video Demo</button>
                    </a></span>
                </div>
                {display['languages'].map((language, i) => {
                    const altText = language.replace(/\.[^/.]+$/, "")
                    // console.log(altText)
                    return(
                        <img className='devStyle' key={i} src= {languageImageLink + language} alt={altText}/>
                    )
                })}
            </div>
        )

    }else{
        return(
            <div className='grayColumnContent'>
                <div className= 'nonVidPicColumn'>
                    <img className="picPortfolio p1" src= { headerImageLink + display['image']+['.png']} alt={display['name']}/>
                    <img className="picPortfolio p2" src= { headerImageLink + display['image'] + ['2.png']} alt={display['name']}/>
                </div>
                <div className='nonVidTextColumn'>
                    <div className="profileProjectName">{display['name']}</div>
                    <div className="profileHeader">{'//'} {display['type']}</div>
                    <div className='profileParagraphFont'>{display['description']}</div>

                    <div className='buttonAlign v1'>
                        <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                            <button className="demoReadButtons">Live Demo</button>
                        </a></span>
                        <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                            <button className="demoReadButtons">Read Me</button>
                        </a></span>
                    </div>
                </div>
                <div className="buttonsSmallerBlock">
                    <div className='buttonAlign v2'>
                        <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                            <button className="demoReadButtons">Live Demo</button>
                        </a></span>
                        <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                            <button className="demoReadButtons">Read Me</button>
                        </a></span>
                    </div>
                </div>
                {display['languages'].map((language, i) => {
                    const altText = language.replace(/\.[^/.]+$/, "")
                    // console.log(altText)
                    return(
                        <img className='devStyle' key={i} src= {languageImageLink + language} alt={altText}/>
                        )
                    })}
            </div>
        )
    }
}

// ================================= define class and extend component

class Portfolio extends Component{

    componentDidMount() {
        this.props.Header("Portfolio");
        window.scrollTo(0, 0);
    }

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
                    {myProjects.map((project, i) => {
                        return(
                        <ProjectList 
                        name={project}
                        key={i}
                        click={this.displayProject}
                        hover={this.displayHover}
                        offHover={this.displayHoverOff}
                        />
                        )
                    })}
                </div>
                <div className="hoverPageLine h1">
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


const mapDispatchToProps = dispatch =>{
   return{
        Header: (page) => dispatch(SetHeader(page))
   }
}

export default connect(null, mapDispatchToProps)(Portfolio);