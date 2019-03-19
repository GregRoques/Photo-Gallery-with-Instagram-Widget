import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.css"

function Footer(props){
    return(
        <div className="footer">
            <div className="resume socialIcon">
                <img className="resume1" src='/images/socialIcons/pdf2.jpg' target="_blank" alt="logo" href='socialIcons/Resume.pdf' />
                <img className="resume2" src='/images/socialIcons/pdf1.jpg' target="_blank" alt="logo" href='socialIcons/Resume.pdf' />
            </div>
                    
            <div className="li socialIcon">
            <img className="li1" src='/images/socialIcons/li2.jpg' target="_blank" alt="logo" href='https://www.linkedin.com/in/gregroques/' />
                <img className="li2" src='/images/socialIcons/li1.jpg' target="_blank" alt="logo" href='https://www.linkedin.com/in/gregroques/' />
            </div>
            <div className="gh socialIcon">
                <img className="gh1" src='/images/socialIcons/gh2.jpg' target="_blank" alt="logo" href='https://github.com/GregRoques' />
                <img className="gh2" src='/images/socialIcons/gh1.jpg' target="_blank" alt="logo" href='https://github.com/GregRoques' />
            </div>
            <div className="contact socialIcon">
            <Link to="/conact"> <img className="contact1" src='/images/socialIcons/contact2.jpg' target="_blank" alt="logo"/></Link>
            <Link to="/contact"> <img className="contact2" src='/images/socialIcons/contact1.jpg' target="_blank" alt="logo"/></Link>
            </div>
        </div>
    )
}

export default Footer;