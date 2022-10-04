const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  var count = req.body.count;
  try {
    let { allRecs } = require("../util/linkedInList");
    let ranPics = [];

    while (ranPics.length <= count) {
      const ranNum = Math.floor(Math.random() * allRecs.length);
      ranPics.push(allRecs[ranNum]);
      allRecs.slice(ranNum, 1);
    }
    return res.json(ranPics);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;