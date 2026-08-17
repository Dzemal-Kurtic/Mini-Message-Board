import express from "express"

import { getMessageById, getAllMessages, createMessage } from "../controllers/messageController.js"

const messageRouter = express.Router()

messageRouter.get("/", getAllMessages)
messageRouter.get("/:id", getMessageById)
messageRouter.post("/", createMessage)

export default messageRouter