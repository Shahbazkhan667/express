const express = require("express");
const app = express();

app.use("/shahbaz", (req, res , next ) => {
    res.send("send");

});


app.listen(8003, () => {
    console.log("http://localhost:8003");
})






















