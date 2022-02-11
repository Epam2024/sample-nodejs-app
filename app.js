const express = require("express");
const app = express();

app.get("/", (req, res) => {res.send("<h1> Hello World from AWS Code Pipeline </h1>");});

app.get("/health", (req, res) => {
    res.status(200);
    res.send("<h1> Yes! I'm Healthy </h1>");
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});
