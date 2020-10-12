import React, { Component } from "react";
import { projectDetails, ProjectList, ProjectOnDisplay } from "./Port_Dependencies";
import Legend from "../Legend/Legend";
import "./Portfolio.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'


class Portfolio extends Component{

    componentDidMount() {
        this.props.Header("Projects");
        window.scrollTo(0, 0);
    }

    state = {
        hoverProject: '',
        currentProject: 'varicure'
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
                    {Object.keys(projectDetails).map((project, i) => {
                        return(
                        <ProjectList 
                        name={project}
                        image={projectDetails[project].image}
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
                    
                        {Object.keys(projectDetails).map((project, i) => {
                            return (
                                this.state.currentProject === project ? 
                                    <div className="profileRowBackground">
                                        <ProjectOnDisplay key={i} title={project} /> 
                                    </div>: null 
                            )
                        })}
                    
                </div>
                <Legend/>
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