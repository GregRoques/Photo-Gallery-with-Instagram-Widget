https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens#get-a-long-lived-token

// =============== requests authorization

https://api.instagram.com/oauth/authorize
  ?client_id={instagram-app-id}
  &redirect_uri={redirect-uri}
  &scope={scope}
  &response_type=code
  &state={state}     

// ====================================================== short code get


const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgridApi.js");

// ============================================================== in the event of pm2 refresh, this retreives and restarts countdown to long-term token refresh

var isTrue = false;

if(!isTrue){

    //get longTermToken and expiration from db
    .then(res =>{
        const{ access_token, expires_in} = res;
        isTrue = true;
        refreshLongTermToken(access_token, expires_in)
    })
    

}

// ============================================================== user long-term token refresh

refreshLongTermToken(token, expiration){
    setTimeout(function(){
        axios.get(`https://graph.instagram.com/refresh_access_token`, {
        grant_type: "ig_refresh_token",
        client_secret: "",
        access_token: token
    })
    .then(res => {
        const{ access_token, expires_in} = res;
        
        // Send access_token and expires_in to db

        isTrue = true;
        refreshLongTermToken(access_token, expires_in)

    })
    .catch(res =>{
        const {error, error_reason, error_description} = res;
        const sendDate = new Date().toISOString().slice(0, 10);

        // ============================================================== email user if refresh fails

        transporter.sendMail({
            to: "",
            from: email,
            subject: `${subject}`,
            html: `<b>From:</b> ${name} <br/> 
            <b>Date:</b> ${sendDate} <br/><br/>
            Your Long Term Instagram Token for GregRoques.com/photography did not refresh.<br/>
            Please log in and request a new token to use your Instagram Widget again.<br/>
            <b>${error}: </b> ${error_reason} <br/> ${error_description}`
        })
    })
    }, expiration - 86400) // 86400 is one day before expiration
}

// ============================================================== user request for long-term token

const getLongTermToken = (token) => {
    axios.get(`https://graph.instagram.com/access_token'`, {
        grant_type: "ig_exchange_token",
        client_secret: "",
        access_token: token
    })
    .then(res => {
        const{ access_token, expires_in} = res;
        
        // Send access_token and expires_in to db

        refreshLongTermToken(access_token, expires_in)

    })
    .catch(res =>{
        const errors = res;
        router.post('/user-update-blog', (req, res, next) => {
            res.json(errors)
        })
    })
}

// ============================================================== router post from instagram for short-term token

router.get("/insta-auth", (req,res,next) =>{
    if(req.error){
        router.post('/user-update-blog', (req, res, next) => {
            res.json(req)
        })
    }

    if(req.code){
        const { code } = req;
        axios.get('https://api.instagram.com/oauth/access_token',{
            client_id: "",
            client_secret: "",
            grant_type: "authorization_code",
            redirect_uri="",
            code = code
        })
        .then(res =>{
            const {user_id, acess_token } = res;
            //const exchangeType = "ig_exchange_token";
            //const exchangetUrl = 'access_token'
            getLongTermToken(access_token)
        })
        .catch(res =>{
            const errors = res;
            router.post('/user-update-blog', (req, res, next) => {
                res.json(errors)
            })
        })
    }
})