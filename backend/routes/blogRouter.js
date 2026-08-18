import express from "express"

import { getMessageById, getAllBlogs, postBlog } from "../controllers/blogController.js"

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.get("/:id", getMessageById)
blogRouter.post("/", postBlog)

export default blogRouter