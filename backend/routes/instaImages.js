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
    const fields = '?fields=username,id,media_url,permalink,caption,timestamp,media_type,children{media_url}' // id
    const count = "&count=5";
    const accessToken = `&access_token=${req.instaToken}`;

    axios.get(`${url}${fields}${count}${accessToken}`)
    .then(async(res) =>{
        const data = res.data.data
        req.returnObject.userName = data[0].username
        req.returnObject.image = [];
        for (let i=0; i < 5; i++){
            console.log(data[i].children)
        const {  media_url, caption, timestamp, permalink, children } = data[i]; //media_type, id,
             req.returnObject.image.push({   
                pic: media_url,
                caption: caption,
                date: timestamp.slice(5,10) + "-" + timestamp.slice(0,4), 
                url: permalink,
                children: children ? children.data : null
            })
        }
        next();
    })
    .catch(err =>{
        console.log(`Could not get media info`);
        throw err;  
    })

}, (req,res)=>{
    console.log(req.returnObject)
    res.json(req.returnObject)
 })

module.exports = router;