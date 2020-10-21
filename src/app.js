const express = require("express");
const app =express();
const port  = process.env.PORT || 7000;
const path = require("path");
var hbs = require('hbs');

const staticpath = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");

const partial_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticpath));



app.get("/" , (req , res) => {
    res.render('index')
});

app.get("/about" , (req , res) => {
    res.render('about');
});

app.get("/weather" , (req , res) => {
    res.render('weather');
});

app.get("/home" , (req , res) => {
    res.render('home');
});

app.get("*" , (req , res) => {
    res.render("404error",{
        erroormsg:"Opps msg not found"
    });
});


app.listen(port, ()=>{
    console.log(`listening to the server ${port}`);
})