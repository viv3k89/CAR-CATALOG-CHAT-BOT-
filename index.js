const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});
app.get("/dash",(req,res)=>{
    res.render("dashboard.ejs");
});
app.get("/2nd",(req,res)=>{
    res.render("2nd.ejs");
});
app.get("/2ndhandcar",(req,res)=>{
    res.render("2ndhandcar.ejs");
});
app.get("/accessories",(req,res)=>{
    res.render("accessories.ejs");
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});