import Message from "../model/message.js"

export async function createMessage(data) {
    if (!data || !data.title) {
        throw new Error("A message needs a title.")
    }

    if (!data || !data.snippet) {
        throw new Error("A message needs a snippet.")
    }

    if (!data || !data.content) {
        throw new Error("A message needs content.")
    }
    const message = new Message({
        title: data.title,
        snippet: data.snippet,
        content: data.content
    })

    return await message.save()
}