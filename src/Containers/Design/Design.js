import React, {Component} from "react";
import "./Design.css";

let i = 1;

const musicPhotos = {
    1:{
        band: 'Two Door Cinema Club',
        image: 'images/design/musicPhotog/2dcc.jpg',
        website: 'http://www.whereyat.com/two-door-cinema-club-kicks-it-at-the-joy'
    },
    2:{
        band: 'Atlas Genius',
        image: 'images/design/musicPhotog/ag.jpg',
        website: 'http://www.whereyat.com/a-genius-performance'
    },
    3:{
        band: 'Broken Social Scene',
        image: 'images/design/musicPhotog/bsc.jpg',
        website: 'https://www.whereyat.com/broken-social-scene-brings-hugs-and-thunder-to'
    },
    4:{
        band: 'The Legend of Zelda: Symphony of the Goddesses',
        image: 'images/design/musicPhotog/zelda.jpg',
        website: 'http://www.whereyat.com/a-link-to-the-pas'
    },
    5:{
        band: 'Drake ft. Migos',
        image: 'images/design/musicPhotog/drake.jpg',
        website: 'https://www.whereyat.com/drake-and-the-three-migos-conquer-the-smoothie-king-center'
    },
    6:{
        band: `Lil' Wayne ft. Tory Lanez`,
        image: 'images/design/musicPhotog/weezy.jpg',
        website: 'https://www.whereyat.com/lil-weezyana-fest-celebrates-top-selling'
    },
    7:{
        band: 'Foster the People ft. Paramore',
        image: 'images/design/musicPhotog/fop.jpg',
        website: 'https://www.whereyat.com/after-laughter-tour-brings-smiles-to-champion'
    },
    8:{
        band: 'Fall Out Boy Ft. Machine Gun Kelly',
        image: 'images/design/musicPhotog/fob.jpg',
        website: 'https://www.whereyat.com/fall-out-boy-light-up-the-smoothie-king-center2'
    }
}

class Design extends Component{

    state ={
        imageNum: i
    }

    leftClick = () =>{
        i--
        if(i<1){
            i = 8
        }
        this.setState({
            imageNum: i
        })
    }

    RightClick = () =>{
        i++

        if(i>8){
            i = 1
        }

        this.setState({
            imageNum: i
        })
    }


    render(){

        let currentNum = this.state.imageNum

        return(
            <div className="fadeIn">
                <div className='photoContent'>
                    <div onClick={this.leftClick} className="picButtons buttonLeft">{`<`}</div>
                    <div className='sliderContainer'>
                        <img src={musicPhotos[currentNum]['image']}/>
                    </div>
                    <div onClick={this.RightClick} className="picButtons buttonRight">{`>`}</div>
                </div>
                <div className='picTextAlign'>{musicPhotos[currentNum]['band']}</div>
            </div>
        )
    }

}
export default Design;