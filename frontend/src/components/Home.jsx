import { useState, useEffect } from "react"

import MessageCard from "./MessageCard"

function Home(){
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMessages() {
            try{
            const response = await fetch("http://localhost:3000/messages/")
            const data = await response.json()
            if(!response.ok) throw new Error(data.error)
            setMessages(data)
            }catch(error){
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        loadMessages()
    }, [])
    
    return(
        <div className=" m-4 flex gap-4 rounded-lg p-2 border-gray-400 flex-wrap flex-row justify-center items-center">
            {loading && <p className="bg-gray-100 pl-16">Loading messages please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            {messages.length > 0 && <div className="flex justify-center bg-blue-100 p-2 rounded-lg">Messages from our users: </div>}
            {!error && !loading && messages.map((m) => (
                <MessageCard key={m.id} message={m}/>))}
        </div> 
    )
}

export default Home