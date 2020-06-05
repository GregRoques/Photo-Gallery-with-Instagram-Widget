// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// // ============================================================== user long-term token refresh

// const refreshLongTermToken = () => {

    // axios.get('https://gregs-blog-1546d.firebaseio.com/insta_access/.json?data/')
    // .then(res=>{
    //     req.instaToken = res.data.longTermToken
    //     //req.instaID = res.data.appID
    //     req.instaSecret = res.data.Secret
    //     next();
    // })
    // .catch(err =>{
    //     console.log(`Could not get login info: ${err}`)
    //     next();
    // })
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