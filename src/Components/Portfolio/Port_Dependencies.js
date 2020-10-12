import React from 'react';
import "./Portfolio.css";

// ================================= Featured Projects

export const projectDetails ={
    varicure: {
        name: 'Varicure Vein Center',
        type: 'Full Stack',
        image: 'varicure',
        description: `Full Stack company website for Miami-based medical practice Varicure Vein Center. In addition to website creation and maintaneance, I also manage the practice's digital marketing strategy and graphic design.`,
        languages: ['html5.png', 'css3.png','javascript.png','react.png', 'redux.png','nodejs.png', 'express.png','portfolioAws.png'],
        demo: 'https://www.Varicure.com',
        readMe: 'https://github.com/GregRoques/VeriCure/blob/master/README.md'
    },
    beds: {
        name: 'Beds 4 Less',
        type: 'Full Stack',
        image: 'beds',
        description: `Full Stack website for New Orleans-based mattress reatailer Beds 4 Less.`,
        languages: ['html5.png', 'css3.png','javascript.png','react.png', 'nodejs.png', 'express.png','portfolioAws.png'],
        demo: 'https://www.nolabeds.com',
        readMe: 'https://github.com/GregRoques/BFL/blob/master/README.md'
    },
    dietactics: {
        name: 'DIETactics',
        type: 'Full Stack',
        image: 'dietactics',
        description: `DIETactics is a full stack web application utilizing mySQL, Node.Js, and Express. Users are able to create diet plans based on their input (current weight, height, target weight, etc.). Users can log into their profile and view/update their progress on their current diet.`,
        languages: ['html5.png', 'css3.png','javascript.png', 'nodejs.png', 'express.png','mysql.png'],
        demo: 'https://www.youtube.com/watch?v=5rvmnx3hxyM&feature=youtu.be',
        readMe: 'https://github.com/GregRoques/DIETactics/blob/master/README.md'
    },
    urlshredder: {
        name: `URL Shredder`,
        type: 'MERN Stack',
        image: `urlshredder`,
        description: `A custom a URL shortener similar to Bitly and TinyURL. After submitting the form a user is given a custom, shortened URL; when the shortened URL is used they are redirected to the original URL.`,
        languages: ['html5.png', 'css3.png','javascript.png','react.png','nodejs.png', 'express.png','mysql.png'],
        demo: `https://www.youtube.com/watch?v=Vc_ZWM41dnM&feature=youtu.be`,
        readMe: 'https://github.com/GregRoques/URL-Shortener/blob/master/README.md'

    }
}

// ================================= Populate selectable circles

export const ProjectList = ({name, image, click, hover, offHover}) => {
    return (
        <div>
            <div style={`background-image: url('/images/portfolioImages/${image}Icon.png)`} onClick={()=>click(name)} onMouseOut={()=>offHover()} onMouseOver={()=>hover(name)}>
            </div>
        </div>                
    )
}

// ================================= Populate selected project

export const ProjectOnDisplay = ({title}) =>{
    const display = projectDetails[title]
    const headerImageLink = 'images/portfolioImages/'
    const languageImageLink = 'images/technologies/'
    
    return(
        <div className='grayColumnContent'>
            <div className= 'nonVidPicColumn'>
                <img className="picPortfolio p1" src= { headerImageLink + display['image']+['1.png']} alt={display['name']}/>
                <img className="picPortfolio p2" src= { headerImageLink + display['image'] + ['2.png']} alt={display['name']}/>
            </div>
            <div className='nonVidTextColumn'>
                <div className="profileProjectName">{display['name']}</div>
                <div className="profileHeader">{'//'} {display['type']}</div>
                <div className='profileParagraphFont'>{display['description']}</div>

                <div className='buttonAlign v1'>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                        <button className="demoReadButtons">
                            { display['demo'].includes('youtube', -1) ? `${'Video'}` : `${'Live Demo'}` }
                        </button>
                    </a></span>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                        <button className="demoReadButtons">Read Me</button>
                    </a></span>
                </div>
            </div>
            <div className="buttonsSmallerBlock">
                <div className='buttonAlign v2'>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                        <button className="demoReadButtons">
                            { display['demo'].includes('youtube', -1) ? `${'Video'}` : `${'Live Demo'}` }
                        </button>
                    </a></span>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                        <button className="demoReadButtons">Read Me</button>
                    </a></span>
                </div>
            </div>
            {display['languages'].map((language, i) => {
                const altText = language.replace(/\.[^/.]+$/, "")
                return(
                    <img className='devStyle' key={i} src= {languageImageLink + language} alt={altText}/>
                    )
                })}
        </div>
    )
}
