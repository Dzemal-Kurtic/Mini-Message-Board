import express from "express"

import getAllMessages from "../controllers/indexController.js"

const indexRouter = express.Router()

indexRouter.get("/", getAllMessages)

//indexRouter.get("/new")

export default indexRouter