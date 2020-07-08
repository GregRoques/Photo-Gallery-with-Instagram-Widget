var express = require('express');
var app = express();
//const path = require("path");
//const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const blogEntries = require("./routes/blogEntries");
const instaImages = require("./routes/instaImages");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(instaImages);
app.use(blogEntries);

// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", (req, res, next) => {
//    res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});