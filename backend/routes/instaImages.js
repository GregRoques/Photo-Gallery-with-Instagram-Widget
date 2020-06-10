const express = require("express");
const router = express.Router();
const instaRead = require('../util/insta');
const axios = require("axios");

// https://developers.facebook.com/docs/instagram-api/reference/media

router.get("/instaImages", (req,res,next) =>{
    req.returnObject = {};

    axios.get(instaRead)
    .then(res=>{
        req.instaToken = res.data.longTermToken
        req.returnObject.profilePic = res.data.profilePic ? res.data.profilePic : "";
        next();
    })
    .catch(err =>{
        console.log(`Could not get login info`)
        throw err
    })

}, (req, res, next)=>{
    const url = `https://graph.instagram.com/me/media`;
    const fields = '?fields=username, media_url,permalink,caption,timestamp,children' // id
    const count = "&count=5";
    const accessToken = `&access_token=${req.instaToken}`;

    axios.get(`${url}${fields}${count}${accessToken}`)
    .then(res =>{
        const data = res.data.data
        req.returnObject.userName = data[0].username
        req.returnObject.image = [];
        for (let i=0; i < 5; i++){
            req.returnObject.image.push({   
                pic: [data[i].media_url],
                caption: data[i].caption,
                date: data[i].timestamp.slice(5,10) + "-" + data[i].timestamp.slice(0,4), 
                url: data[i].permalink,
                //children: data[i].children ? data[i].children.data.slice(1,data[i].children.data.length): null 
            })
        }
        next();
    })
    .catch(err =>{
        console.log(`Could not get media info`);
        throw err;  
    })
// }, (req,res,next)=>{
//         const myImages = req.returnObject.image;
//         for(let i = 0; i < myImages.length; i++){
//             if(myImages[i].children !== null){
//                 for (let j = 0; j < myImages[i].children.length; j++){
//                     const url = `https://graph.instagram.com/${myImages[i].children[j].id}`;
//                     const fields = '?fields=media_url'
//                     const accessToken = `&access_token=${req.instaToken}`;
                    
//                      axios.get(`${url}${fields}${accessToken}`)
//                     .then(res =>{
//                         req.returnObject.image[i].pic.push(res.data.media_url)
//                     })
//                     .catch(err =>{
//                         console.log(`Could not get child info: ${err}`);
//                      throw err;  
//                     })
//                 } 
                
//             }
//         }
//         setTimeout(function(){
//             next();
//         }, 2000)
    }, (req,res)=>{
        console.log(req.returnObject)
        res.json(req.returnObject)
 })

module.exports = router;