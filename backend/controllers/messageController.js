import messages from "../data/messages.js"
import Message from "../model/message.js"
import { createMessage } from "../services/messageServices.js"

export async function getAllMessages(req, res) {
    if (!messages) {
        return res.status(404).json({ error: "Messages not found." })
    }
    res.json(messages)
}

export async function getMessageById(req, res) {
    const id = req.params.id
    const message = messages.find((m) => m.id === Number(id))
    if (!message) {
        return res.status(404).json({ error: "Message not found." })
    }
    res.json(message)
}

export async function postMessage(req, res) {
    try {
        const newMessage = await createMessage(req.body)
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
