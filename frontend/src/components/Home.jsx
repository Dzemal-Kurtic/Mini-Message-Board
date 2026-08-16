import { useState, useEffect } from "react"

function Home(){
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMessages() {
            try{
            const response = await fetch("http://localhost:3000/")
            console.log(response)
            if(!response.ok) throw new Error("Request failed")
            const data = await response.json()
            console.log(data)
            setMessages(data)
            }catch{
                setError("Could not load messages, please try again later.")
            } finally{
                setLoading(false)
            }
        }
        loadMessages()
    }, [])
    
    return(
        <div className="border-4 m-4 flex gap-4 flex-wrap flex-row justify-center items-center">
            {loading && <p className="bg-gray-100 pl-16">Loading messages please wait</p>}
            {error && <p className="bg-red-500">{error}</p>}
            {messages.length > 0 && <div className="flex justify-center bg-blue-100 p-2 rounded-lg">Messages from our users: </div>}
            {messages.map((m) => (
                <div key={m.text} className="gap-1 border-2 grow-1 rounded-lg flex flex-wrap flex-row justify-center">
                    <p className="flex flex-wrap justify-center bg-gray-300 p-2 rounded-lg grow-1">{m.user}: </p>
                    <p className="flex flex-wrap justify-center  bg-red-300 p-2 rounded-lg grow-1">{m.text}</p>
                </div>
        ))}
        </div> 
    )
}

export default Home