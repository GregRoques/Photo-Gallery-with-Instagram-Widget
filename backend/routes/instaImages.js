const express = require("express");
const router = express.Router();
const instaToken = require('../util/insta');
const axios = require("axios");



router.get("/instaImages", (req,res,next) =>{
//https://developers.facebook.com/docs/instagram-api/reference/media
    const url = `https://graph.instagram.com/me/media/`;
    const fields = '?fields=caption,id,media_url,media_type,permalink,timestamp,children'
    const count = "&count=5";
    const accessToken = `&access_token=${instaToken}`;

    req.returnArray = [];

    axios.get(`${url}${fields}${accessToken}${count}`)
    .then(res =>{
        const data = res.data.data
        req.returnArray = [data[0], data[1],data[2],data[3],data[4]]
        console.log(req.returnArray)
    })
    .catch(err =>{
        console.log(err);
        //throw err;  
    })
})


module.exports = router;