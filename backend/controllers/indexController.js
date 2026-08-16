import messages from "../data/messages.js";

async function getAllMessages(req, res) {
    return res.json(messages)
}

export default getAllMessages