const express = require("express");
const router = express.Router();
//const instaToken = require('../util/insta');
const axios = require("axios");

// https://developers.facebook.com/docs/instagram-api/reference/media

router.get("/instaImages", (req,res,next) =>{
    axios.get('https://gregs-blog-1546d.firebaseio.com/insta_access/.json?data/')
    .then(res=>{
        req.instaToken = res.data.longTermToken
        req.instaID = res.data.appID
        next();
    })
    .catch(err =>{
        //console.log(`Could not get login info: ${err}`)
        throw err
    })

}, (req, res, next)=>{
    const url = `https://graph.instagram.com/me/media/`;
    const fields = '?fields=caption,username,id,media_url,permalink,timestamp'
    const count = "&count=5";
    const accessToken = `&access_token=${req.instaToken}`;

    req.returnObject = {};

    axios.get(`${url}${fields}${accessToken}${count}`)
    .then(res =>{
        const data = res.data.data
        req.returnObject.userName = data[0].username;
        
        //req.returnObject.image = [data[0], data[1],data[2],data[3],data[4]]
        req.returnObject.image = [];
      
        for (let i=0; i < 5; i++){
            req.returnObject.image.push({   
                pic: data[i].media_url,
                caption: data[i].caption,
                date: data[i].timestamp.slice(0,10), 
                url: data[i].permalink
            })
            
        }
        next();
    })
    .catch(err =>{
        //console.log(`Could not get media info: ${err}`);
        throw err;  
    })
}, (req,res)=>{

    axios.get(`https://www.instagram.com/${req.returnObject.userName}/?__a=1`)
    .then(res=>{
        const { profile_pic_url_hd } = res.data.graphql.user;
        req.returnObject.profilePic = profile_pic_url_hd;
        console.log(req.returnObject);
        res.json(req.returnObject)
    })
    .catch(err=>{
        console.log(`Could not get user info: ${err}`)
        //console.log(req.returnObject);
        res.json(req.returnObject)
    })
})

module.exports = router;