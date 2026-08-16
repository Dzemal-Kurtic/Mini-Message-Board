import express from "express"
import cors from "cors"

import indexRouter from "./routes/indexRouter.js"

const app = express()
app.use(cors())


app.use("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Mini Message Board Backend running on PORT: ${PORT}`)
})