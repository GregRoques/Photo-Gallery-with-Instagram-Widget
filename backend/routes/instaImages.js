const express = require("express");
const router = express.Router();

const results = {
    myProfilePic: "https://lh3.googleusercontent.com/proxy/qRSmXP4xklfeIxWJx47NWPPOXTw98JUMwIVIoxmG_TWApKRltySXzMc-ylnZmeKHQudlxamstWDBhuFE3iAGJTDBl3pBsgncI9zfj7-eEidHxiOJTXN79WZb4rrUA-tVLBnqH_kqZOEHiQ",
    images: [
        { 
            pic: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
            date: "March 26, 2020",
            caption: "Cats living their best life. #cats"
        },
        { 
            pic: "https://lh3.googleusercontent.com/proxy/5f-8aWhJtPvAypaj3rZgqhBFqrAIDNvS1Le4goALoOxJ_gYUu49_exoNivJg7N3dOCUbpaCSDXpb3InW5uLacBci3Hk2NfSfqPZCw59wPqZX4T1_PsOBxCG_MaCjVWjQ9yM",
            date: "February 26, 2020",
            caption: "Cats living their best life. #cats"
        },
        { 
            pic: "https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2020/02/GettyImages-1199242002-1-scaled.jpg",
            date: "April 26, 2020",
            caption: "Cats living their best life. #cats"
        },
        { 
            pic: "https://images.squarespace-cdn.com/content/v1/55e7b445e4b04e7d0095c2cd/1556296318516-36C15R1S3A4H1GUP62QL/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/AdobeStock_170586850+%281%29.jpeg?format=1000w",
            date: "January 26, 2020",
            caption: "Cats living their best life. #cats"
        },
        { 
            pic: "https://chuckanddons.com/media/wysiwyg/kitten_blog.jpg",
            date: "May 26, 2020",
            caption: "Cats living their best life. #cats"
        }
    ]
};

router.get("/instaAuth", (req, res) => {
    res.json(results)
})
   
    

module.exports = router;
