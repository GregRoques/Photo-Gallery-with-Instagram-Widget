import React, { Component } from 'react';
import instaCss from './instaGallery.module.css';

class instaGallery extends Component {

    render(){
        return(
            <div className={instaCss.instaModuleSpacing}>
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a href="https://www.instagram.com/qtrmileatatime" target="_blank" rel="noopener noreferrer nofollow">
                @qtrmileatatime
            </a> 
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <img className={instaCss.bigPicture} src="https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg"/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <img className={instaCss.smallPicture1} src="https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg"/>
                <img className={instaCss.smallPicture2} src="https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg"/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <img className={instaCss.smallPicture1} src="https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg"/>
                <img className={instaCss.smallPicture2} src="https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg"/>
            </div>
        </div>
    </div>
                
            </div>

        );
    };
}

export default instaGallery;
