import express from "express"

import { getBlogById, getAllBlogs, postBlog, removeBlog } from "../controllers/blogController.js"

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.get("/:id", getBlogById)
blogRouter.post("/", postBlog)
blogRouter.delete("/:id", removeBlog)

export default blogRouter