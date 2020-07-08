const express = require("express");
const router = express.Router();
const { fireUser } = require('../util/insta');
const axios = require("axios");

router.get("/myblogs", (req,res,next) =>{
    axios.get(`${fireUser}orderBy="$key"&limitToLast=5`)
        .then(res=> {
            //console.log(Object.values(res.data))
            req.body.fiveLatest = Object.values(res.data);
            next();
        })
        .catch(err=>{
            throw err
        })
    }, (req,res, next)=>{
        const forwardLink = req.query.link;
        console.log(forwardLink)
        if(forwardLink){
            let currGetCall = "";
            if (forwardLink.length <= 10){
                currGetCall = `${fireUser}orderBy="date"&equalTo="${encodeURI(forwardLink)}"`
            } else{
                currGetCall = `${fireUser}orderBy="$key"&equalTo="${forwardLink}"`
            }
            console.log(currGetCall)
            axios.get(currGetCall)
            .then(res1=>{
                
                req.body.currBlog= Object.values(res1.data)[0]
                if(req.body.currBlog){
                   res.json(req.body)
                } else{
                    req.body.currBlog = req.body.fiveLatest[4];
                    res.json(req.body)
                }
                
            })
            .catch(err2=>{
                console.log(err2)
                req.body.currBlog = req.body.fiveLatest[4]
                res.json(req.body)
            })
        } else{
            req.body.currBlog = req.body.fiveLatest[4];
            res.json(req.body)
        }   
        
    })

    module.exports = router;