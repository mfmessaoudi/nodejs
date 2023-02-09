import mongoose from "mongoose";
mongoose.connect("mongodb+srv://xxxxxx");

const {Schema, model} = mongoose;
mongoose.set('strictQuery', false);

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
      user: String,
      content: String,
      votes: Number
    }]
  });

const Blog = model('Blog', blogSchema);
export default Blog;
