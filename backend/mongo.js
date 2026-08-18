import mongoose from "mongoose"
import dns from "dns"

//const password = "NodeReact"
//const url = "mongodb+srv://<NodeReact>:<NodeReact>@cluster0.tzmzmy2.mongodb.net/?appName=messageApp"

dns.setServers(["8.8.8.8", "8.8.4.4"])
//mongoose.set("strictQuery", false)


async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { family: 4 })
        console.log("Connected to MongoDB Atlas")
    } catch (error) {
        console.error(`MongoDB connection failed with error: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongo