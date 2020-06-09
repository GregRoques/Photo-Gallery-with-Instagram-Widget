const express = require("express");
const router = express.Router();
const instaRead = require('../util/insta');
const axios = require("axios");


router.get("/instaImages", (req,res, next) =>{
       
    const userName = 'qtrmileatatime';
    let userInfo ={
        userName: userName
    };

    axios.get(`https://www.instagram.com/${userName}/?__a=1`)
    .then(res=>{
        const { profile_pic_url_hd, edge_owner_to_timeline_media } = res.data.graphql.user;
    
        userInfo.profilePic = profile_pic_url_hd;
        userInfo.postCount = edge_owner_to_timeline_media.count
        userInfo.image = [];

        const images = res.data.graphql.user.edge_owner_to_timeline_media.edges
        //console.log(images[1].node.edge_sidecar_to_children)
        for (let i=0; i < 5; i++){
            const picDate = new Date((images[i].node.taken_at_timestamp) * 1000)
            const children = [];
            if(images[i].node.edge_sidecar_to_children){
                const albumImages = images[i].node.edge_sidecar_to_children.edges
                for (let j=1; j < albumImages.length; j++){
                    children.push(albumImages[j].node.display_url)
                }
            }

            userInfo.image.push({   
                pic: children ? [images[i].node.display_url, ...children] : [images[i].node.display_url],
                caption: (images[i].node.edge_media_to_caption.edges[0]) ? images[i].node.edge_media_to_caption.edges[0].node.text : "",
                date: `${picDate.getMonth()}/${picDate.getDate()}/${picDate.getFullYear()}`,
                url: `https://www.instagram.com/p/${images[i].node.shortcode}/`,
                likes: images[i].node.edge_liked_by.count,
                location: images[i].node.location ? images[i].node.location.name : ""
            })

        }
        req.forSend = userInfo;
        setTimeout(function(){
            next();
        },3000)
        
    })
    .catch(err=>{
        console.log(`Could not get user info: ${err}`)
        throw err;
    })
}, (req, res)=>{
    console.log(req.forSend.image[1].pic)
    res.json(req.forSend)
})

module.exports = router;


