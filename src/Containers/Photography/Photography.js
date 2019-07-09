import React, { Component } from 'react';
import css from './Photography.module.css'

import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'
import PhotoGallery from './GalleryHandler'

const photoArray ={}

class Photography extends Component{

 
    componentDidMount() {
        this.props.Header("Photography");
        window.scrollTo(0, 0);
    }

    
      selectAlbum = extension => {
        
        const urlExtension = extension.replace(/[" "]/g, "_")
        this.props.history.push(`/photography/${urlExtension}`)
        }
    
      render(){
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
        
          return(
              <div className = { css.fadeIn }>
                  <div className = { css.galleryContainer }>
                      <div className = { css.gridContainer }>
                            {Object.keys(photoArray).map((volume, i) => {
                                return(
                                  <PhotoGallery
                                    key= { i }
                                    album= { volume }
                                    images= { photoArray }
                                    selectAlbumHandler = {this.selectAlbum}
                                  />
                                )
                            })}
                      </div>
                      <div className = { css.socialIcon}>
                            <span>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/qtrmileatatime/">
                                    <img alt="Instagram @QtrMileAtATime" src="images/socialIcons/instagram.png"/> @qtrmileatatime
                                </a>                            
                            </span>
                        </div>
                  </div>
              </div>
          )
        
      }
    }

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default (connect)(null, mapDispatchToProps)(Photography);