import mongoose from "mongoose"
import dns from "dns"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true })

blogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString(),
            delete returnedObject._id
        delete returnedObject.__v
    },
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog