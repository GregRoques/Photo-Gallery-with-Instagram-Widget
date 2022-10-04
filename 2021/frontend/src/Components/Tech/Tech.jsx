import React from 'react';
import cssHome from './tech.module.css';
import About from './About/About';
import Skills from "./Technologies/Technologies";
import Web from './Web/Web';

const Design = () => {
    window.scrollTo(0, 0)
    return(
        <div className={cssHome.fadeIn} style={{margin: '0 0 10rem 0'}}>
            <About/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <div id="web">
                <Web/>
            </div>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <div id="tech">
                <Skills/>
            </div>
        </div>
    )
}

export default Design;