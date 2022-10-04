var express = require("express");
var app = express();
const cors = require("cors");
const helmet = require("helmet");

const photography = require("./routes/photography");
const insta = require("./routes/insta");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/backendPhotos", photography);
app.use("/instagram", insta);

const PORT = 2000;
app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
