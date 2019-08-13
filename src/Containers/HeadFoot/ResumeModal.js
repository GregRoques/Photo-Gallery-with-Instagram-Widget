import React from 'react';
import "./HeadFoot.css";

const ResumeModal = ({ show, close }) => {
    return show ? (
        <div className="modal">
            <div className="modalPosition">
                <div className="closeButton" onClick={close}>X</div>
                <div className="modalContact">
                    <span className="contactTitle">Contact</span>
                    <p className="contactFormat footerResize1"> <i className="material-icons glyphs">location_on</i> Atlanta, GA &nbsp;&nbsp; <a href="tel:504-220-3832"><i className="material-icons glyphs">phone</i> 504.220.3832</a></p>
                    <p className="contactFormat footerResize2"> <i className="material-icons glyphs">location_on</i> Atlanta, GA</p>
                    <p className="contactFormat footerResize2"><a href="tel:504-220-3832"><i className="material-icons glyphs">phone</i> 504.220.3832</a></p>
                    <p className="contactFormat"><a href="mailto:greg@gregroques.com"> <i className="material-icons glyphs">email&nbsp;</i>Greg@GregRoques.com</a></p>
                </div>
            </div>
        </div>
    ) : null;
};

export default ResumeModal;
