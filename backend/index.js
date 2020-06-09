var express = require('express');
var app = express();
//const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const instaImages = require("./routes/legacyAPI_instaImages");

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(instaImages);

// app.use(express.static(path.join(__dirname, "build")));
// app.get("/instaImages", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/instaImages")

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});