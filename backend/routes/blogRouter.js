import express from "express"

import { getBlogById, getAllBlogs, postBlog, editBlog, removeBlog } from "../controllers/blogController.js"

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.get("/:id", getBlogById)
blogRouter.post("/", postBlog)
blogRouter.put("/:id", editBlog)
blogRouter.delete("/:id", removeBlog)

export default blogRouter