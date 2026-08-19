import express from "express"
import cors from "cors"
import connectMongo from "./mongo.js"

import blogRouter from "./routes/blogRouter.js"


const app = express()
app.use(cors())
app.use(express.json())

await connectMongo()

app.use("/blogs/", blogRouter)

app.use((error, req, res, next) => {
    console.log("brah", error)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Mini Message Board Backend running on PORT: ${PORT}`)
})