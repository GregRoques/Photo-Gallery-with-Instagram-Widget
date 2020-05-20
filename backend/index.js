var express = require('express');
var app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const instaImages = require("./routes/instaImagesTest");
const instaOauth = require("./routes/instaOauth");

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(instaImages);
app.use(instaOauth);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(2000);
console.log('App is running on port 2000');