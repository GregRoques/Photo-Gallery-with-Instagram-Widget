const express = require("express");
const router = express.Router();
const instaRead = require('../util/instaKey');
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
    }, 86400000); // sets to false in 24 hours
}

const emailWarning = (message, err) =>{
    if(isSentToday === false){
        const sendDate = new Date().toISOString().slice(0, 10);
        transporter.sendMail({
            to: "greg.roques@gmail.com",
            from: "greg@gregroques.com",
            subject: `${message}`,
            html: `<b>Date:</b> ${sendDate} <br/><br/>
            ${message} <br/><br/>
            <b>ERROR MESSAGE:</b> ${err}`
        }).then(() => {
            setSentTodayToTrue();
        }).catch(err => {
            console.log(`Could not send error email: ${err}`);
        });
    }
}

const abridgeCaption = ({caption}) =>{
    const trimCaption = caption.trim();
    if(trimCaption.length < 76) return trimCaption
    if(trimCaption.length > 75){
        let slicedCaption = trimCaption.slice(0, string.lastIndexOf(" ", 75))
        return slicedCaption[slicedCaption.length - 1] === 75 ? slicedCaption : `${slicedCaption}...`
    }
} //I restrict my caption here to no more than 75 characters; this is better than attempting this
  // server-side with CSS, as CSS is finicky depending on the browser and browser version.

const getInstaInfo = (instaToken) =>{
    const url = `https://graph.instagram.com/me/media`;
    const fields = '?fields=media_url,permalink,caption,timestamp,media_type,children{media_url}' // username,id,
    const accessToken = `&access_token=${instaToken}`;
    axios.get(`${url}${fields}${accessToken}`)
    .then(res =>{
        const data = res.data.data
        returnObject.image = [];
        data.map(pic=>{
            if(pic.media_type !=="VIDEO"){
                const {  media_url, caption, timestamp, permalink, children } = pic; 
                        returnObject.image.push({   
                        pic: media_url,
                        caption: abridgeCaption(caption),
                        date: timestamp.slice(5,10) + "-" + timestamp.slice(0,4), 
                        url: permalink,
                        children: children ? children.data : null
                    })
            }
        })
    })
    .catch(err =>{
        if(isSentToday === false){
            const subject = 'GregRoques.com: InstaGram Long Term Token has experienced an error or has expired.';
            emailWarning(subject, err)
        }
        console.log(`Could not get media info: ${err}`);
        returnObject = {}
    })
 }

 const isTimeUp = (ex, myToken) => {
    const days = 59; // Instagram token lasts 60 days, so I want to give myself a days advance.
    let result = new Date(ex);
    let today = new Date();
    result.setDate(result.getDate() + days);
    const numOfSeconds = result.getTime() - today.getTime();
    const numOfDays = Math.round((Math.round(numOfSeconds) / (1000 * 3600 * 24)).toFixed(1));
    
    if(numOfDays > 5){
        getInstaInfo(myToken)
        return
    }
    if(numOfDays <= 5 && numOfDays >= 1 && isSentToday === false){
        const subject = 'GregRoques.com: InstaGram Long Term Token expiring soon';
        const when = `You Long Term Token will expire in approximately ${numOfDays} days. Renew it today!`
        emailWarning(subject, when)
        getInstaInfo(myToken)
        return
    }
    if(numOfDays < 1 && isSentToday === false){
        const subject = 'GregRoques.com: InstaGram Long Term Token HAS EXPIRED!!!';
        const when = `You Long Term Token has expired. Renew it today!`
        emailWarning(subject, when)
        return
    }
}

const getToken = () =>{
    axios.get(instaRead)
    .then(res=>{
        const {longTermToken,lttDate, userName } = res.data
        returnObject.userName = userName
        isTimeUp(lttDate, longTermToken)
    })
    .catch(err =>{
        console.log(`Could not get login info: ${err}`)
    })
}

setInterval(() => {
    getToken();
}, 21600000); // refreshes every 6 hours

getToken()

router.get("/", (req,res,next) =>{
    if(returnObject !== {}){
        res.json(returnObject)
    }
 })



module.exports = router;