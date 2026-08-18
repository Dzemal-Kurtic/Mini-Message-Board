import mongoose from "mongoose"
import dns from "dns"

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema)

export default Message