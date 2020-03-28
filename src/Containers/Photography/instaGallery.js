import React, { Component } from 'react';
import instaCss from './instaGallery.module.css';

const pic = "https://i.etsystatic.com/10283697/r/il/fd147b/1014181977/il_570xN.1014181977_5sx7.jpg";

class instaGallery extends Component {
    state={
        profilePic: "https://lh3.googleusercontent.com/proxy/qRSmXP4xklfeIxWJx47NWPPOXTw98JUMwIVIoxmG_TWApKRltySXzMc-ylnZmeKHQudlxamstWDBhuFE3iAGJTDBl3pBsgncI9zfj7-eEidHxiOJTXN79WZb4rrUA-tVLBnqH_kqZOEHiQ",
        images: [
            { 
                pic: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
                date: "March 26, 2020",
                caption: "Cats living their best life. #cats"
            },
            { 
                pic: "https://lh3.googleusercontent.com/proxy/5f-8aWhJtPvAypaj3rZgqhBFqrAIDNvS1Le4goALoOxJ_gYUu49_exoNivJg7N3dOCUbpaCSDXpb3InW5uLacBci3Hk2NfSfqPZCw59wPqZX4T1_PsOBxCG_MaCjVWjQ9yM",
                date: "February 26, 2020",
                caption: "Cats living their best life. #cats"
            },
            { 
                pic: "https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2020/02/GettyImages-1199242002-1-scaled.jpg",
                date: "April 26, 2020",
                caption: "Cats living their best life. #cats"
            },
            { 
                pic: "https://images.squarespace-cdn.com/content/v1/55e7b445e4b04e7d0095c2cd/1556296318516-36C15R1S3A4H1GUP62QL/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/AdobeStock_170586850+%281%29.jpeg?format=1000w",
                date: "January 26, 2020",
                caption: "Cats living their best life. #cats"
            },
            { 
                pic: "https://chuckanddons.com/media/wysiwyg/kitten_blog.jpg",
                date: "May 26, 2020",
                caption: "Cats living their best life. #cats"
            }

        ],
        display: false
    }

    instaPopUp = (pic, date, caption, index) =>{
        this.isPopUpOpen()
        return(
            <div className={instaCss.centerAndBackground}>
                <div onClick={() => this.isPopUpOpen()} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt={ pic} className={instaCss.selectedHeaderImage} src={ this.state.profilePic }/>
                        <a className={instaCss.selectedHyperlink} href="https://www.instagram.com/qtrmileatatime" target="_blank" rel="noopener noreferrer nofollow">qtrmileatatime</a> 
                    </div>
                    <div className={instaCss.selectedImageContainer}>
                        <img alt={ index } src={ pic }/>
                    </div>
                    <div className={instaCss.selectedCaption}>
                        <b>{ date }</b><br/>
                        { caption }
                    </div>
                </div>
            </div>
        )
    }

    isPopUpOpen = () =>{
        const { display } = this.state;
        this.setState({
            display: !display
        })
    }

    render(){
        const { image } = this.state;
        return this.state.images.length === 5 ? (
            <div className={instaCss.instaModuleSpacing}>
                { this.state.display === true ? <this.instaPopUp/> : null }
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a href="https://www.instagram.com/qtrmileatatime" target="_blank" rel="noopener noreferrer nofollow">
                Instagram
            </a> 
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <img className={instaCss.bigPicture} alt={ "insta1" } onClick={()=> this.instaPopUp(image[0].pic, image[0].date, image[0].caption, "insta1")} src={ image[0].pic }/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <img className={instaCss.smallPicture1} alt={ "insta2" } onClick={()=> this.instaPopUp(image[1].pic, image[1].date, image[1].caption, "insta2")} src={ image[1].pic }/>
                <img className={instaCss.smallPicture2} alt={ "insta3"  } onClick={()=> this.instaPopUp(image[2].pic, image[2].date, image[2].caption, "insta3")} src={ image[2].pic }/>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <img className={instaCss.smallPicture1} alt={ "insta4" } onClick={()=> this.instaPopUp(image[3].pic, image[3].date, image[3].caption, "insta4")} src={ image[3].pic }/>
                <img className={instaCss.smallPicture2} alt={ "insta5" } onClick={()=> this.instaPopUp(image[4].pic, image[4].date, image[4].caption, "insta4")} src={ image[4].pic }/>
            </div>
        </div>
    </div>
                
            </div>

        ): null;
    };
}

export default instaGallery;