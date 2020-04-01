import React, { Component } from 'react';
import axios from "axios";
import instaCss from './instaGallery.module.css';
import { instaBackend } from "../../AxiosOrders";

class instaGallery extends Component {
    state={
        profilePic: "",
        image: [],
        selectedPic: {
            pic: "",
            date: "",
            caption: "",
            index: ""
        },
        display: false
    }

    componentDidUpdate = () =>{
        this.getInstaGallery()
    }

    getInstaGallery = () =>{
        axios.get(instaBackend)
          .then(res => {
              const { myProfilePic, images } = res.data;
              console.log(myProfilePic, images);
            this.setState({
                profilePic: myProfilePic,
                image: images,
            })
          })
          .catch(error => {
            console.log(error);
          });
    }

    instaPopUp = () =>{
        const { selectedPic } = this.state;
        return  this.state.display === true ? (
            <div className={instaCss.centerAndBackground}>
                <div onClick={() => this.isPopUpOpen( "", "", "", "")} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt="profile pic" className={instaCss.selectedHeaderImage} src={ this.state.profilePic }/>
                        <a className={instaCss.selectedHyperlink} href="https://www.instagram.com/qtrmileatatime" target="_blank" rel="noopener noreferrer nofollow">qtrmileatatime</a> 
                    </div>
                    <div className={instaCss.selectedImageContainer}>
                        <img class={instaCss.chosenImage} alt={ selectedPic.index } src={ selectedPic.pic }/>
                    </div>
                    <div className={instaCss.selectedCaption}>
                        <b>{ selectedPic.date }</b><br/>
                        { selectedPic.caption }
                    </div>
                </div>
            </div>
        ) : null
    }

    isPopUpOpen = (newPic, newDate, newCaption, newIndex) =>{
        const { display } = this.state;
        this.setState({
            display: !display,
            selectedPic: {
                pic: newPic,
                date: newDate,
                caption: newCaption,
                index: newIndex
            },
        })
    }

    render(){
        const { image } = this.state;
        return this.state.image.length === 5 ? (
            <div className={instaCss.instaModuleSpacing}>
                <this.instaPopUp/> 
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a title="Follow Me: @qtrmileatatime" href="https://www.instagram.com/qtrmileatatime" target="_blank" rel="noopener noreferrer nofollow">
                Instagram
            </a> 
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <img className={instaCss.bigPicture} alt={ "insta1" } onClick={()=> this.isPopUpOpen(image[0].pic, image[0].date, image[0].caption, "insta1")} src={ image[0].pic }/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <img className={instaCss.smallPicture1} alt={ "insta2" } onClick={()=> this.isPopUpOpen(image[1].pic, image[1].date, image[1].caption, "insta2")} src={ image[1].pic }/>
                <img className={instaCss.smallPicture2} alt={ "insta3"  } onClick={()=> this.isPopUpOpen(image[2].pic, image[2].date, image[2].caption, "insta3")} src={ image[2].pic }/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <img className={instaCss.smallPicture1} alt={ "insta4" } onClick={()=> this.isPopUpOpen(image[3].pic, image[3].date, image[3].caption, "insta4")} src={ image[3].pic }/>
                <img className={instaCss.smallPicture2} alt={ "insta5" } onClick={()=> this.isPopUpOpen(image[4].pic, image[4].date, image[4].caption, "insta4")} src={ image[4].pic }/>
            </div>
        </div>
    </div>
                
            </div>

        ): null;
    };
}

export default instaGallery;