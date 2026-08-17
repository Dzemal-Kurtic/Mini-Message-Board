import messages from "../data/messages.js";

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

export async function createMessage(req, res) {
    if (!req.body || !req.body.user) {
        return res.status(400).json({ error: "A message needs user." })
    }

    if (!req.body || !req.body.text) {
        return res.status(400).json({ error: "A message needs text." })
    }

    const highestId = Math.max(...messages.map((m) => m.id), 0)
    const newMessage = {
        id: highestId + 1,
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    }
    messages.push(newMessage)
    res.status(201).json(newMessage)
}
