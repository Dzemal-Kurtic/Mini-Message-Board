import express from "express"

import { getMessageById, getAllMessages, postMessage } from "../controllers/messageController.js"

const messageRouter = express.Router()

messageRouter.get("/", getAllMessages)
messageRouter.get("/:id", getMessageById)
messageRouter.post("/", postMessage)

export default messageRouter