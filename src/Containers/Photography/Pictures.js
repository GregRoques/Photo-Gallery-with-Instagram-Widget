import React, { Component } from 'react';
import css from './Photography.module.css'
import {connect} from "react-redux"
import SetHeader from '../../Actions/SetHeader'
import { SetPhotoArray } from '../../Actions/PhotoArray'

var photoArray = {}

class Pictures extends Component{

    state = {
        modalShow: false,
        modalPhoto: null
        
    }

    componentDidMount(){
        if(this.props.header !== "Photography"){
            this.props.Header("Photography");
        }
        window.scrollTo(0, 0);
    }

    pictureDisplay = (currentPhoto) =>{
        this.setState(prevState =>({
            modalShow: !prevState.modalShow,
            modalPhoto: currentPhoto
        }))

    }

    render(){

        var currentPathname =((window.location.pathname).split('/photography/').pop()).replace(/["_"]/g, " ");
        let modalPhotoGallery = null
        if(this.props.reduxPhoto === null){
            const folderNames = require.context('../../../public/images/photography/').keys()
            folderNames.forEach(folder=>{
              let anImage = folder
              let anAlbum = (folder.replace('./','')).split('/')[0]
                
              if (!Object.keys(photoArray).includes(anAlbum)){
                photoArray[anAlbum] = [anImage]
              } else {
                photoArray[anAlbum].push(anImage)
              }
            })
            this.props.setArray(photoArray)
        } else {
          photoArray = this.props.reduxPhoto
        }

        if(this.state.modalShow){
            let photoNum = this.state.modalPhoto
            modalPhotoGallery=(
                <div className= { css.photoModal }>
                    <div>
                        <img alt={ currentPathname + photoNum } src={'/images/photography/' + photoArray[currentPathname][photoNum] }/>
                    </div>
                    <div>
                        { photoNum +1 }/{ photoArray[currentPathname].length }
                    </div>
                </div>
            )
        }
        
        return(
            <div className = { css.fadeIn }>
                { modalPhotoGallery }
                <h1 className = {css.albumTitleText}>{currentPathname}</h1>
                <div className = { css.photoGalleryContainer }>
                    <div className = { css.photoGrid }>
                        { photoArray[currentPathname] ? photoArray[currentPathname].map((image, i) => {
                            return(
                                <div key={ i } className={css.photoBox}>
                                    <img onClick={() => this.pictureDisplay(i) } alt={ currentPathname + i } src={'/images/photography/'+ image}/>
                                </div>
                            )
                        }): this.props.history.push(`/photography`) } 
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = ({header, reduxPhoto}) => {
    return {
        header,
        reduxPhoto: reduxPhoto.reduxPhoto
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page)),
         setArray: array => dispatch(SetPhotoArray(array))
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);