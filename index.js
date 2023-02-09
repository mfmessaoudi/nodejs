import mongoose from "mongoose";
import Blog from "./model/Blog.js";


mongoose.connect("mongodb+srv://geek:test123@cluster0.ay26dwo.mongodb.net/?retryWrites=true&w=majority", (err, data) => {
    if (err) throw err;
    console.log("connected to db");
    
});




// create a new blog post object

const article = new Blog({
    title: 'mytitle',
    slug: 'Hello',
    published: true,
    content: 'nice to see you',
    tags: ['tag1', 'tag2'],
});

// insert the articles

await article.save();


const item = await Blog.findOne({});
console.log(item);

