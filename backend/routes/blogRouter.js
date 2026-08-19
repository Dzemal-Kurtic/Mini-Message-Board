import express from "express"

import { getBlogById, getAllBlogs, postBlog } from "../controllers/blogController.js"

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.get("/:id", getBlogById)
blogRouter.post("/", postBlog)

export default blogRouter