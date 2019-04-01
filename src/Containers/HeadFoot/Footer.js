import React from "react";
import "./HeadFoot.css"

function Footer(props){
    return(
        <div className="footer">
            <a href='https://www.linkedin.com/in/gregroques/' target="_blank">
                <div className="li">
                    <img className="li1"  src= 'images/socialIcons/li2.jpg' alt='LinkedIn: @GregRoques'/>
                    <img className="li2" src= 'images/socialIcons/li1.jpg' alt='LinkedIn: @GregRoques'/>
                </div>
            </a>
        </div>
    )
}

export default Footer;