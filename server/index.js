const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//retieving posts
app.get("/", (req, res) => {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("success"));
  }, 2000);
});

app.listen(4001, () => {
  console.log("post service listening at 4001");
});
