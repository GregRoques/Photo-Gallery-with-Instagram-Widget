import React, {Component} from "react";
import "./Design.css";


// ======================================== Slider Images, set "i" = 1, Slider Render

let i = 1;

const musicPhotos = {
    1:{
        band: 'Two Door Cinema Club',
        image: 'images/design/musicPhotog/2dcc.jpg',
        website: 'http://www.whereyat.com/two-door-cinema-club-kicks-it-at-the-joy',
        target: '_blank'
    },
    2:{
        band: 'Atlas Genius',
        image: 'images/design/musicPhotog/ag.jpg',
        website: 'http://www.whereyat.com/a-genius-performance',
        target: '_blank'
    },
    3:{
        band: 'Broken Social Scene',
        image: 'images/design/musicPhotog/bsc.jpg',
        website: 'https://www.whereyat.com/broken-social-scene-brings-hugs-and-thunder-to',
        target: '_blank'
    },
    4:{
        band: 'The Legend of Zelda: Symphony of the Goddesses',
        image: 'images/design/musicPhotog/zelda.jpg',
        website: 'https://www.whereyat.com/a-link-to-the-past',
        target: '_blank'
    },
    5:{
        band: 'Drake ft. Migos',
        image: 'images/design/musicPhotog/drake.jpg',
        website: 'https://www.whereyat.com/drake-and-the-three-migos-conquer-the-smoothie-king-center',
        target: '_blank'
    },
    6:{
        band: `Lil' Wayne`,
        image: 'images/design/musicPhotog/weezy.jpg',
        website: 'https://www.whereyat.com/lil-weezyana-fest-celebrates-top-selling',
        target: '_blank'
    },
    7:{
        band: 'Foster the People ft. Paramore',
        image: 'images/design/musicPhotog/fop.jpg',
        website: 'https://www.whereyat.com/after-laughter-tour-brings-smiles-to-champion',
        target: '_blank'
    },
    8:{
        band: 'Fall Out Boy',
        image: 'images/design/musicPhotog/fob.jpg',
        website: 'https://www.whereyat.com/fall-out-boy-light-up-the-smoothie-king-center2',
        target: '_blank'
    },
    9:{
        band: 'More Photos',
        image: 'images/design/musicPhotog/insta.jpg',
        website: 'https://qtrmileatatime.myportfolio.com',
        target: '_blank'
    }
}

let musicPhotosLength= (Object.keys(musicPhotos)).length

// Slider Render
const Slider = ({ currentNum, clickL, clickR }) =>{
    return(
    <div>
        <div className="artDirection">Photography</div>
        <div className='photoContent'>
            <div onClick={()=>clickL()} className="picButtons buttonLeft">{`<`}</div>
            <div className='sliderContainer'>
                <img src={musicPhotos[currentNum]['image']} alt={musicPhotos['band']}/>
            </div>
            <div onClick={()=>clickR()}  className="picButtons buttonRight">{`>`}</div>
        </div>
        <div className='picTextAlign'>
            <a rel="noopener noreferrer" target={musicPhotos[currentNum]['target']}  href={musicPhotos[currentNum]['website']} alt={musicPhotos[currentNum]['band']} >
                {musicPhotos[currentNum]['band']}
            </a>
        </div>
    </div>
    )
}

// ================================================================================ Class Extends Component

class Photography extends Component{

    state ={
        imageNum: i
    }

    leftClick = () =>{
        i--
        if(i<1){
            i = musicPhotosLength
        }
        this.setState({
            imageNum: i
        })
    }

    rightClick = () =>{
        i++

        if(i>musicPhotosLength){
            i = 1
        }

        this.setState({
            imageNum: i
        })
    }

// ============================================ Render

    render(){

        return(
            <div className="fadeIn">
                <Slider 
                currentNum = {this.state.imageNum}
                clickL = {this.leftClick}
                clickR = {this.rightClick}
                />
            </div>
        )
    }

}
export default Photography;