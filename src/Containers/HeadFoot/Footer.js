import React from "react";
import "./HeadFoot.css"

function Footer(props){
    return(
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
            
            <div className="contact socialIcon">
                
                    <img className="contact1"  src= 'images/socialIcons/contact2.jpg' alt='LinkedIn: @GregRoques'/>
                    <img className="contact2" src= 'images/socialIcons/contact1.jpg' alt='LinkedIn: @GregRoques'/>
               
            </div>

        </div>
    )
}

export default Footer;