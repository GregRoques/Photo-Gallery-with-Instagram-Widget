// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");
// const myKey = require("../util/sendgridApi.js");

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: myKey
//     }
// }));

// // ============================================================== in the event of pm2 refresh, this retreives and restarts countdown to long-term token refresh

// var isTrue = false;

// if(!isTrue){
//     //get longTermToken and expiration from db
//     .then(res =>{
//         const{ lttDate } = res;
//             const currDate = new Date(lttDate);
//             const expirationDate = setDate(currDate.getDate() + days);
//             const expires_in = (expirationDate).getTime() - currDate.getTime();
//         if(expires_in > 0){
//             isTrue = true;
//             setTimeout(function(){
//                 refreshLongTermToken()
//         }, expires_in)
//         }
//     })
// }

// // ================================================================= email error 


// const sendErrorEmail = error => {
//     const sendDate = new Date().toISOString().slice(0, 10);
//     transporter.sendMail({
//         to: 'greg@gregroques.com',
//         from: 'greg@gregroques.com',
//         subject: `Instagram Widget LongTerm Token Refresh Failed`,
//         html: `
//         <b>Date:</b> ${sendDate} <br/><br/>
//         Your Long Term Instagram Token for GregRoques.com/photography did not refresh.<br/>
//         Please log in and request a new token to use your Instagram Widget again.<br/>
//         <b>${error}<br><br/><br/>`
//     })
// }

// // ============================================================== user long-term token refresh

// const refreshLongTermToken = () => {

//     //get longTermToken and appSecret from db
//     .then(res =>{
//         const{ appSecret, longTermToken } = res;
    
//         axios.get(`https://graph.instagram.com/refresh_access_token`, {
//             grant_type: "ig_refresh_token",
//             client_secret: appSecret,
//             access_token: longTermToken
//         })
//         .then(res => {
//             const{ access_token } = res;
//             const currDate = new Date()
//             const expirationDate = setDate(currDate.getDate() + days);
//             const expires_in = (expirationDate).getTime() - currDate.getTime()
            
//             const newValues = {
//                 longTermToken: access_token,
//                 lttDate: currDate,
//             }

//             //write.patch(`${this.props.userId}/${this.state.updateArticleKey}/.json?auth=${this.props.idToken}`, newValues)
//             . then(()=>{
//                 isTrue = true;
//                 setTimeout(function(){
//                     refreshLongTermToken()
//                 }, expires_in)
//             })
//             .catch(error =>{
//                 sendErrorEmail(error);
//             })
//         })
//         .catch(res =>{
//             const error =  `${res.error}, ${res.error_reason}, ${res.error_description}`
//             sendErrorEmail(error);
//         })
//     })
//     .catch(error =>{
//         sendErrorEmail(error);
//     })
// };

// // FB for Developers Link -- guide to Longterm access tokens:
// // https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens#get-a-long-lived-token