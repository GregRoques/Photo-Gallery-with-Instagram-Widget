import React, { Component } from 'react';
import css from './Photography.module.css'
import {connect} from "react-redux"
import SetHeader from '../../Actions/SetHeader'
import { SetPhotoArray } from '../../Actions/PhotoArray'

var photoArray = {}
var currentPathname
class Pictures extends Component{

    componentDidMount(){
        currentPathname =((window.location.pathname).split('/photography/').pop()).replace(/["_"]/g, " ");

        if(this.props.header !== "Photography"){
            this.props.Header("Photography");
        }

        window.scrollTo(0, 0);

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
        if(Object.keys(photoArray).includes(currentPathname) === false){ 
            this.props.history.push(`/photography`)
        }
    }

    render(){
        
        return(
            <div className = { css.fadeIn }>
                <div className = { css.galleryContainer }>
                    <div className = { css.photoGrid }>
                        {/* {photoArray[currentPathname].map((image, i) => {
                            return(
                               <img className={css.photoBox} key={ i } alt={ currentPathname + i } src={'/images/photography/'+ image}/>
                            )
                        })} */}
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