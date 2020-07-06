const express = require("express");
const router = express.Router();
const { instaRead } = require('../util/insta');
const axios = require("axios");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgripApi");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));

let isSentToday = false;

const setSentTodayToTrue = () =>{
    isSentToday = true;
    setTimeout(() => {
        isSentToday = false;
    }, 86400000);
}

const emailWarning = message =>{
    const sendDate = new Date().toISOString().slice(0, 10);
    transporter.sendMail({
        to: "greg.roques@gmail.com",
        from: "greg@gregroques.com",
        subject: `${message}`,
        html: `<b>Date:</b> ${sendDate} <br/><br/>
        ${message}`
    }).then(() => {
        console.log("Success");
        setSentTodayToTrue();
    }).catch(err => {
        console.log("err");
    });
}

router.get("/instaImages", (req,res,next) =>{
    console.log("insta")
    req.returnObject = {};

    axios.get(instaRead)
    .then(res=>{
        req.instaToken = res.data.longTermToken
        req.returnObject.userName = res.data.userName
        req.returnObject.profilePic = res.data.profilePic ? res.data.profilePic : "";
        next();
    })
    .catch(err =>{
        console.log(`Could not get login info`)
        throw err
    })

}, (req, res, next)=>{
    const url = `https://graph.instagram.com/me/media`;
    const fields = '?fields=media_url,permalink,caption,timestamp,media_type,children{media_url}' // username,id,
    const accessToken = `&access_token=${req.instaToken}`;

    axios.get(`${url}${fields}${accessToken}`)
    .then(res =>{
        //console.log(res.data.data)
        const data = res.data.data
        //req.returnObject.userName = data[0].username
        req.returnObject.image = [];
        data.map(pic=>{
            if(pic.media_type !=="VIDEO"){
                const {  media_url, caption, timestamp, permalink, children } = pic; 
                        req.returnObject.image.push({   
                        pic: media_url,
                        caption: caption,
                        date: timestamp.slice(5,10) + "-" + timestamp.slice(0,4), 
                        url: permalink,
                        children: children ? children.data : null
                    })
                    
            }
        })
        next();
    })
    .catch(err =>{
        //console.log(`Could not get media info`);
        if(!isSentToday){
            emailWarning('GregRoques.com: InstaGram Long Term Token has expired')
        }
        throw err;  
    })

}, (req,res)=>{
    //console.log(req.returnObject)
    res.json(req.returnObject)
 })

module.exports = router;