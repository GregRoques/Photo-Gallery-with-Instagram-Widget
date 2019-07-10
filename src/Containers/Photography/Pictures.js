import React, { Component } from 'react';
import css from './Photography.module.css'
import {connect} from "react-redux"
import SetHeader from '../../Actions/SetHeader'
import { SetPhotoArray } from '../../Actions/PhotoArray'

var photoArray = {}

class Pictures extends Component{

    componentDidMount(){
        if(this.props.header !== "Photography"){
            this.props.Header("Photography");
        }
        window.scrollTo(0, 0);

    }

    render(){

        var currentPathname =((window.location.pathname).split('/photography/').pop()).replace(/["_"]/g, " ");
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
        
        return(
            <div className = { css.fadeIn }>
                <h1 className = {css.albumTitleText}>{currentPathname}</h1>
                <div className = { css.photoGalleryContainer }>
                    <div className = { css.photoGrid }>
                        { photoArray[currentPathname] ? photoArray[currentPathname].map((image, i) => {
                            return(
                               <img className={css.photoBox} key={ i } alt={ currentPathname + i } src={'/images/photography/'+ image}/>
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