import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./HeadFoot.css";
import ResumeModal from './ResumeModal';

class Footer extends Component{

    state ={
        email: false
    }

    toggleEmail=()=>{
        const doesShow = this.state.email
        this.setState({email: !doesShow})
    }
    
    render(){
    return(
        <div>
            { this.state.email ? <ResumeModal
                close= {this.toggleEmail}
            /> : null }
            <div className="footer">
                
                <div className="contact socialIcon" onClick={this.toggleEmail}>
                        <img className="contact1"  src= '/images/socialIcons/contact2.jpg' alt='greg@gregroques.com'/> 
                        { !this.state.email ?  <img className="contact2" src= '/images/socialIcons/contact1.jpg' alt='greg@gregroques.com'/>: null}
                </div>

                <div className="li socialIcon">
                    <a href='https://www.linkedin.com/in/gregroques/' rel="noopener noreferrer" target="_blank">
                        <img className="li1"  src= '/images/socialIcons/li2.jpg' alt='LinkedIn: @GregRoques'/>
                        <img className="li2" src= '/images/socialIcons/li1.jpg' alt='LinkedIn: @GregRoques'/>
                    </a>
                </div>

                <div className="gh socialIcon">
                    <a rel="noopener noreferrer" target="_blank" href='https://github.com/GregRoques' >
                        <img className="gh1"  src= '/images/socialIcons/gh2.jpg' alt='GitHub: @GregRoques'/>
                        <img className="gh2" src= '/images/socialIcons/gh1.jpg' alt='GitHub: @GregRoques'/>
                    </a>
                </div>
                
                <div className="resume socialIcon">
                    <Link onClick={e =>{ e.preventDefault(); window.open("https://www.gregroques.com/images/socialIcons/Resume.pdf")}}>
                        <img className="resume1"  src= '/images/socialIcons/pdf2.jpg' alt='2019 Resume'/>
                        <img className="resume2" src= '/images/socialIcons/pdf1.jpg' alt='2019 Resume'/>
                    </Link>
                </div>
            </div>
        </div>
    )}
}

export default Footer;