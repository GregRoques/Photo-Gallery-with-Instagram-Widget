import React, { Component } from 'react';
import axios from "axios";
import instaCss from './instaGallery.module.css';
import { instaBackend } from "../../AxiosOrders";
import Results from "../../instatest";

class instaGallery extends Component {
    state={
        userName: Results.userName,
        profilePic: Results.myProfilePic,
        image: Results.images,
        selectedPic: 0,
        selectedPicIndex: 0,
        display: false
    }

    componentDidUpdate = () =>{
        this.getInstaGallery()
    }

    getInstaGallery = () =>{
        axios.get(instaBackend)
          .then(res => {
              console.log(res)
          })
          .catch( err => {
            console.log(err);
          });
    }

    // getInstaGallery = () => {
    //     const { userName, myProfilePic, images } = Results;
    //     this.setState({
    //         userName: userName,
    //         profilePic: myProfilePic,
    //         //image: images
    //     })
    // }

    instaPopUp = () =>{
        const { image, selectedPic, selectedPicIndex, profilePic, userName } = this.state;
        return  this.state.display === true ? (
            <div className={instaCss.centerAndBackground}>
                <div onClick={() => this.isPopUpOpen( "", "", "", "")} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt="profile pic" className={instaCss.selectedHeaderImage} src={ profilePic }/>
        <a className={instaCss.selectedHyperlink} href={`${image[selectedPic].url}`} target="_blank" rel="noopener noreferrer nofollow">{userName}</a> 
                    </div>
                        { image[selectedPic].pic.length > 1 ?
                        <div className={instaCss.selectedImageContainer}>
                            <div className={ instaCss.buttonRight }>
                                <div className={ instaCss.imageGalleryButtons } onClick={()=>this.clickR()}>{'>'}</div>
                            </div>
                            <div className={ instaCss.buttonLeft }>
                                <div className={ instaCss.imageGalleryButtons } onClick={()=>this.clickL()}>{'<'}</div>
                            </div>
                            <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic[selectedPicIndex] }/>
                        </div>
                            : <div className={instaCss.selectedImageContainer}>
                                <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic[selectedPicIndex] }/>
                            </div>
                        }
                    <div className={instaCss.selectedCaption}>
                        { image[selectedPic].date ? <b>{image[selectedPic].date}<br/></b> : null}
                        { image[selectedPic].pic.length > 1 ? <b>{ selectedPicIndex +1 }/{ image[selectedPic].pic.length }: </b> : null }{ image[selectedPic].caption }
                    </div>
                </div>
            </div>
        ) : null
    }

    clickL = () =>{
        const { image, selectedPic, selectedPicIndex } = this.state;
        let i = selectedPicIndex - 1;
        if(i<0){
            i = image[selectedPic].pic.length - 1
        }

        this.setState({
            selectedPicIndex: i
        })
    }

    clickR = () =>{
        const { image, selectedPic, selectedPicIndex } = this.state;
        let i = selectedPicIndex + 1;
        if(i> image[selectedPic].pic.length - 1){
            i = 0
        }

        this.setState({
            selectedPicIndex: i
        })
    }

    isPopUpOpen = num =>{
        const { display } = this.state;
        this.setState({
            display: !display,
            selectedPic: num,
            selectedPicIndex: 0
        })
    }

    render(){
        const { image } = this.state;
        return this.state.image.length === 5 ? (
            <div className={instaCss.instaModuleSpacing}>
                <this.instaPopUp/> 
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a title={`Follow Me: @${this.state.userName}`} href={`https://www.instagram.com/${this.state.userName}`} target="_blank" rel="noopener noreferrer nofollow">
                Instagram
            </a> 
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <div className={instaCss.instaImage1} onClick={()=> this.isPopUpOpen(0)} >
                    <img className={instaCss.bigPicture} alt={ "insta1" } src={ image[0].pic[0] }/>
                    <div className ={instaCss.onHover}>
                        {/* <div className={instaCss.onHoverLikes}>&#x2665; {image[0].likes}</div> */}
                        <div className={instaCss.onHoverDate}>{image[0].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <div className={instaCss.instaImage2} onClick={()=> this.isPopUpOpen(1)} >
                    <img className={instaCss.smallPicture} alt={ "insta2" } src={ image[1].pic[0] }/>
                    <div className ={instaCss.onHover}>
                        {/* <div className={instaCss.onHoverLikes}>&#x2665; {image[1].likes}</div> */}
                        <div className={instaCss.onHoverDate}>{image[1].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage3} onClick={()=> this.isPopUpOpen(2)} >
                    <img className={instaCss.smallPicture} alt={ "insta3"  } src={ image[2].pic[0] }/>
                    <div className ={instaCss.onHover}>
                        {/* <div className={instaCss.onHoverLikes}>&#x2665; {image[2].likes}</div> */}
                        <div className={instaCss.onHoverDate}>{image[2].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <div className={instaCss.instaImage4} onClick={()=> this.isPopUpOpen(3)} >
                    <img className={instaCss.smallPicture} alt={ "insta4" } src={ image[3].pic[0] }/>
                    <div className ={instaCss.onHover}>
                        {/* <div className={instaCss.onHoverLikes}>&#x2665; {image[3].likes}</div> */}
                        <div className={instaCss.onHoverDate}>{image[3].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage5} onClick={()=> this.isPopUpOpen(4)} >
                    <img className={instaCss.smallPicture} alt={ "insta5" } src={ image[4].pic[0] }/>
                    <div className ={instaCss.onHover}>
                        {/* <div className={instaCss.onHoverLikes}>&#x2665; {image[4].likes}</div> */}
                        <div className={instaCss.onHoverDate}>{image[4].date}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
            </div>

        ): <div></div>;
    };
}

export default instaGallery;