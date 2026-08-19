import messages from "../data/messages.js"
import ValidationError from "../errors/ValidationError.js"
import Blog from "../model/blog.js"
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../services/blogServices.js"

export async function getAllBlogs(req, res) {
    try {
        const blogs = await getBlogs()
        res.json(blogs)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function getBlogById(req, res) {
    const id = req.params.id
    try {
        const blog = await getBlog(id)
        res.json(blog)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
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

export async function editBlog(req, res) {
    const { body } = req
    const id = req.params.id
    try {
        const blog = await updateBlog(body, id)
        res.json(201).end()
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export async function removeBlog(req, res) {
    const id = req.params.id
    try {
        const deletedBlog = await deleteBlog(id)
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
