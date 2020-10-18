const express = require("express");
const router = express.Router();
const goolgeToken = require('../util/goolgeToken');
const axios = require("axios");

const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgripApi");

// ==================================== Email Transporter

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
        //console.log("Success");
        if(isSentToday === false){
            setSentTodayToTrue();
        }
    }).catch(err => {
        console.log("Could not send error email");
        //throw err
    });
}

// ==================================== Blog Updater

let blogList = []
let blogListDates = []

const updateBlogList = () => {
    axios.get(`${goolgeToken}orderBy="$key"&limitToLast=5`)
    .then(res=>{
        blogList = Object.values(res.data)
        blogList.map(date =>{
            blogListDates.push(date)
        })
    })
    .catch(err =>{
        //console.log('Could Not Update BlogList')
        const subject = 'GregRoques.com: Blog updater is not working.';
        emailWarning(subject, err)
    })
}

setInterval(()=>{
    if(blogList === [] || blogList.length !== 5){
        updateBlogList();
    }
}, 3000); //this is currently 3 seconds... need to set to check once a day


// ==================================== Get Requests

// New Post: update blog List
router.get("/update", (req,res,next) =>{
    updateBlogList()
})

// Go to blog page
router.get("/", (req,res,next) =>{
    if(blogList === [] || blogList.length !== 5){
        (async function(){
            await updateBlogList();
            next()
        })();
    } else {
        next();
    }
}, (req, res) =>{
    if(blogListDates.includes(encodeURI(req.date))){
        const blogIndex = blogListDates.indexOf(req.date);
        const blogPage = {
            blogList,
            currBlog: blogList[blogIndex]
        }
        res.json(blogPage)
    } else {
        currGetCall = `${fireCall}orderBy="date"&equalTo="${encodeURI(req.date)}"`
        axios.get(currGetCall)
        .then(res1=>{
            if(Object.values(res1.data)[0]){
                const blogPageQuery = {
                    blogList,
                    currBlog: Object.values(res1.data)[0]
                }
                res.json(blogPageQuery)
            }
        })
        .catch(err =>{
            const subject = 'GregRoques.com: Cannot grab archieved article from blog';
            emailWarning(subject, err);
            const blogPageArchieveError = {
                blogList,
                currBlog: blogList[0]
            }
            res.json(blogPageArchieveError)
        })
    }
});

// link to article from blog listç
router.get("/linked",(req,res,next) =>{
    const blogPageLinked = {
        blogList,
        currBlog: blogList[req.index]
    }
    res.json(blogPageLinked)
})

module.exports = router;