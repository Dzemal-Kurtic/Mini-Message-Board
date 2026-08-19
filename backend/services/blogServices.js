import Blog from "../model/blog.js"
import ValidationError from "../errors/ValidationError.js"

export async function getBlogs() {
    const blogs = await Blog.find({})
    if (!blogs) throw new Error("Could not find blogs.")
    return blogs
}

export async function getBlog(id) {
    const blog = await Blog.findById(id)
    console.log(blog)
    if (!blog) throw new Error("Could not find the blog.")
    return blog
}

export async function createBlog(data) {
    if (!data || !data.title) {
        throw new ValidationError("A blog needs a title.")
    }

    if (!data || !data.snippet) {
        throw new ValidationError("A blog needs a snippet.")
    }

    if (!data || !data.body) {
        throw new ValidationError("A blog needs a body.")
    }
    const blog = new Blog({
        title: data.title,
        snippet: data.snippet,
        body: data.body
    })

    return await blog.save()
}