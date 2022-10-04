import React from 'react';
import {Link} from "react-router-dom";
import cssHamburgerModal from "./hamburgerModal.module.css";

const HamburgerModal = ({ close, isOpen, isFadeOut }) => {
    return isOpen?(
        <div className={cssHamburgerModal.modal} onClick={e=>close(e)}>
            <div className={ isFadeOut ? cssHamburgerModal.modalPositionFadeOut : cssHamburgerModal.modalPositionFadeIn } >
                    <div className={cssHamburgerModal.closeButton} onClick={e=>close(e)}>X</div> 
                    <div className={cssHamburgerModal.routeContainer}>
                        <Link onClick={e=>close(e)} to="/">Tech</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/media">Media</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/photography">Photography</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <div className={cssHamburgerModal.headerModalResume} onClick={e =>{ close(e); window.open('https://docs.google.com/document/d/e/2PACX-1vQbXTRzdV-BcC8i2GIAHkoCZ_nA4n3l3oNsjpguv29am3AyN2VGstlp2um-pzmR9uWFPoAkmJ905Wq3/pub')}}>Resume</div>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                    </div>
            </div>
        </div>
    ) : null;
};

export default HamburgerModal;