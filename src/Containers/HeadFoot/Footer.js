import React, {Component} from "react";
import "./HeadFoot.css"

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
                    <div className="modalContact">
                        <span className="CloseButton" onClick={this.toggleEmail}>X</span>
                        <p className="contactFormat"> <i className="material-icons glyphs">location_on</i> Atlanta, GA &nbsp;&nbsp; <a href="tel:504-220-3832"><i className="material-icons glyphs">phone</i> 504.220.3832</a>   
              <br/><a href="mailto:greg@gregroques.com"> <i className="material-icons glyphs">email&nbsp;</i>Greg@GregRoques.com</a></p>
                    </div>
                </div>
            )
        }
    return(
        <div>
            {emailModal}
            <div className="footer">
                
                <div className="li socialIcon">
                    <a href='https://www.linkedin.com/in/gregroques/' target="_blank">
                        <img className="li1"  src= 'images/socialIcons/li2.jpg' alt='LinkedIn: @GregRoques'/>
                        <img className="li2" src= 'images/socialIcons/li1.jpg' alt='LinkedIn: @GregRoques'/>
                    </a>
                </div>

                <div className="gh socialIcon">
                    <a href='https://github.com/GregRoques' target="_blank">
                        <img className="gh1"  src= 'images/socialIcons/gh2.jpg' alt='LinkedIn: @GregRoques'/>
                        <img className="gh2" src= 'images/socialIcons/gh1.jpg' alt='LinkedIn: @GregRoques'/>
                    </a>
                </div>

                <div className="resume socialIcon">
                    <a href='images/socialIcons/Resume.pdf' target="_blank">
                        <img className="resume1"  src= 'images/socialIcons/pdf2.jpg' alt='LinkedIn: @GregRoques'/>
                        <img className="resume2" src= 'images/socialIcons/pdf1.jpg' alt='LinkedIn: @GregRoques'/>
                    </a>
                </div>
                
                <div className="contact socialIcon" onClick={this.toggleEmail}>
                    
                        <img className="contact1"  src= 'images/socialIcons/contact2.jpg' alt='LinkedIn: @GregRoques'/>
                        <img className="contact2" src= 'images/socialIcons/contact1.jpg' alt='LinkedIn: @GregRoques'/>
                
                </div>

            </div>
        </div>
    )}
}

export default Footer;