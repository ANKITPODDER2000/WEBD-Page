var express = require('express');
var app = express();
var PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("statics"));

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log("Server Started PORT : ",PORT);
})