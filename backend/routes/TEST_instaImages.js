const express = require("express");
const router = express.Router();
const instaRead = require('../util/insta');
const axios = require("axios");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgripApi");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));

let returnObject = {};

let isSentToday = false;
const setSentTodayToTrue = () =>{
    isSentToday = true;
    setTimeout(() => {
        isSentToday = false;
    }, 86400000);
}

const emailWarning = (message, err) =>{
    const sendDate = new Date().toISOString().slice(0, 10);
    transporter.sendMail({
        to: "greg.roques@gmail.com",
        from: "greg@gregroques.com",
        subject: `${message}`,
        html: `<b>Date:</b> ${sendDate} <br/><br/>
        ${message} <br/><br/>
        <b>ERROR MESSAGE:</b> ${err}`
    }).then(() => {
        console.log("Success");
        setSentTodayToTrue();
    }).catch(err => {
        console.log("Could not send error email");
        //throw err
    });
}

const getInstaInfo = (instaToken) =>{
    const url = `https://graph.instagram.com/me/media`;
    const fields = '?fields=media_url,permalink,caption,timestamp,media_type,children{media_url}' // username,id,
    const accessToken = `&access_token=${instaToken}`;

    axios.get(`${url}${fields}${accessToken}`)
    .then(res =>{
        const data = res.data.data
        returnObject.userName = data[0].username
        returnObject.image = [];
        data.map(pic=>{
            if(pic.media_type !=="VIDEO"){
                const {  media_url, caption, timestamp, permalink, children } = pic; 
                        returnObject.image.push({   
                        pic: media_url,
                        caption: caption,
                        date: timestamp.slice(5,10) + "-" + timestamp.slice(0,4), 
                        url: permalink,
                        children: children ? children.data : null
                    })
            }
        })
    })
    .catch(err =>{
        if(!isSentToday){
            const subject = 'GregRoques.com: InstaGram Long Term Token has experienced an error or has expired.';
            emailWarning(subject, err)
        }
        console.log(`Could not get media info`);
        //throw err;  
    })
 }

 const isTimeUp = (ex, myToken) => {
    const days = 59;
    let result = new Date(ex);
    let today = new Date();
    result.setDate(result.getDate() + days);
    const numOfSeconds = result.getTime() - today.getTime();
    const numOfDays = Math.round((Math.round(numOfSeconds) / (1000 * 3600 * 24)).toFixed(1));
    
    if(numOfDays <= 5 && !isSentToday){
        const subject = 'GregRoques.com: InstaGram Long Term Token expiring soon';
        const when = `You Long Term Token will expire in approximately ${numOfDays} days. Renew it today!`
        emailWarning(subject, when)
    }
    if(numOfDays > 5){
        getInstaInfo(myToken)
    }
}

const getToken = () =>{
    axios.get(instaRead)
    .then(res=>{
        const instaToken = res.data.longTermToken
        const longTermTokenDate = res.data.lttDate
        //returnObject.userName = res.data.userName
        isTimeUp(longTermTokenDate, instaToken)
    })
    .catch(err =>{
        console.log(`Could not get login info`)
        //throw err
    })
}

setTimeout(() => {
    getToken();
}, 21600000); // refreshes every 6 hours

if(!returnObject){
    getToken();
}

router.get("/", (req,res,next) =>{
    if(returnObject){
        res.json(returnObject)
    }
 }).catch(err =>{
    throw err
 })

module.exports = router;