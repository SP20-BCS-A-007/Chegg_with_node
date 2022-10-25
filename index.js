const express = require("express")

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/books", (req, res)=>{
    res.render("books")
})
app.get("/study", (req, res)=>{
    res.render("study")
})
app.get("/career", (req, res)=>{
    res.render("career")
})
app.get("/life", (req, res)=>{
    res.render("life")
})


app.listen(port, ()=>{
    console.log(`Your Server is successfully started with port ${port}`);
})