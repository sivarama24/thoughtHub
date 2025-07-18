import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

let posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
})

app.get("/community", (req, res) => {
    res.render("community.ejs", { posts: posts });
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.post("/compose", (req, res) => {
    const post = {
        title: req.body["postTitle"],
        name: req.body["authorName"],
        content: req.body["postContent"],
    }

    posts.push(post);
})

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
})