import messages from "../data/messages.js"
import ValidationError from "../errors/ValidationError.js"
import Blog from "../model/blog.js"
import { createBlog, getBlogs } from "../services/blogServices.js"

export async function getAllBlogs(req, res) {
    try {
        const blogs = await getBlogs()
        res.json(blogs)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function getMessageById(req, res) {
    const id = req.params.id
    const message = messages.find((m) => m.id === Number(id))
    if (!message) {
        return res.status(404).json({ error: "Message not found." })
    }
    res.json(message)
}

export async function postBlog(req, res) {
    try {
        const newBlog = await createBlog(req.body)
        res.status(201).json(newBlog)
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message })
        }
        res.status(500).json({ error: "Internal server error" })
    }
}
