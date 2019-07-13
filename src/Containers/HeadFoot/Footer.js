import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./HeadFoot.css";

class Footer extends Component{

    state ={
        email: false
    }

    toggleEmail=()=>{
        const doesShow = this.state.email
        this.setState({email: !doesShow})
    }
    
    render(){
        let emailModal = null

        if(this.state.email){
            emailModal=(
                <div className="modal">
                    <div className="modalPosition">
                        <div className="closeButton" onClick={this.toggleEmail}>X</div>
                        <div className="modalContact">
                            <span className="contactTitle">Contact</span>
                            <p className="contactFormat footerResize1"> <i className="material-icons glyphs">location_on</i> Atlanta, GA &nbsp;&nbsp; <a href="tel:504-220-3832"><i className="material-icons glyphs">phone</i> 504.220.3832</a></p>
                            <p className="contactFormat footerResize2"> <i className="material-icons glyphs">location_on</i> Atlanta, GA</p>
                            <p className="contactFormat footerResize2"><a href="tel:504-220-3832"><i className="material-icons glyphs">phone</i> 504.220.3832</a></p>
                            <p className="contactFormat"><a href="mailto:greg@gregroques.com"> <i className="material-icons glyphs">email&nbsp;</i>Greg@GregRoques.com</a></p>
                        </div>
                    </div>
                </div>
            )
        }
    return(
        <div>
            {emailModal}
            <div className="footer">
                
                <div className="contact socialIcon" onClick={this.toggleEmail}>
                        <img className="contact1"  src= '/images/socialIcons/contact2.jpg' alt='greg@gregroques.com'/>
                        <img className="contact2" src= '/images/socialIcons/contact1.jpg' alt='greg@gregroques.com'/>
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
                    <a rel="noopener noreferrer" target="_blank" href='https://www.dropbox.com/s/qsrj71oqsz21y0z/Resume.pdf?dl=0' >
                        <img className="resume1"  src= '/images/socialIcons/pdf2.jpg' alt='2019 Resume'/>
                        <img className="resume2" src= '/images/socialIcons/pdf1.jpg' alt='2019 Resume'/>
                    </a>
                </div>
            </div>
        </div>
    )}
}

export default Footer;