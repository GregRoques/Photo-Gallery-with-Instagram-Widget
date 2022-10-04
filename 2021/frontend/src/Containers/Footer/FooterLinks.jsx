import React from 'react';
import cssFooter from './footer.module.css';

export const Contact = ({ isEmailToggled, isShown }) => {
    return(
        <div className={`${cssFooter.contact} ${cssFooter.socialIcon}`} onClick={isEmailToggled}>
            <img className={cssFooter.contact1}  src= '/images/socialIcons/contact2.png' alt='greg@gregroques.com'/> 
            { !isShown ?  <img className={cssFooter.contact2} src= '/images/socialIcons/contact1.png' alt='greg@gregroques.com'/>: null}
        </div>
    )
}

export const LinkedIn = () => {
    return(
        <div className={`${cssFooter.li} ${cssFooter.socialIcon}`}>
            <a href='https://www.linkedin.com/in/gregroques/' rel='noopener noreferrer' target='_blank'>
                <img className={cssFooter.li1}  src= '/images/socialIcons/li2.png' alt='LinkedIn: @GregRoques'/>
                <img className={cssFooter.li2} src= '/images/socialIcons/li1.png' alt='LinkedIn: @GregRoques'/>
            </a>
        </div>
    )
};

export const Resume = () => {
    return(
            <div className={`${cssFooter.resume} ${cssFooter.socialIcon}`} onClick={e =>{ e.preventDefault(); window.open('https://docs.google.com/document/d/e/2PACX-1vQbXTRzdV-BcC8i2GIAHkoCZ_nA4n3l3oNsjpguv29am3AyN2VGstlp2um-pzmR9uWFPoAkmJ905Wq3/pub')}}>
                <img className={cssFooter.resume1}  src= '/images/socialIcons/pdf2.png' alt='2019 Resume'/>
                <img className={cssFooter.resume2} src= '/images/socialIcons/pdf1.png' alt='2019 Resume'/>
            </div>
    )
};
