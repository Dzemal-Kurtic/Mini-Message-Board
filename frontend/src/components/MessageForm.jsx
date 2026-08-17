import { useState } from "react"
import { useNavigate } from "react-router"

function MessageForm() {
    const [message, setMessage] = useState({
        text: "",
        user: "",
    })
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target
        setError(null)
        setMessage({...message, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })

        const data = await response.json()
        if(!response.ok){
            throw new Error(data.error)
        }
        navigate("/messages/")
        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2 items-center  m-4 rounded-lg">
                <div className="w-full max-w-md justify-center flex">
                    <label htmlFor="user" className="m-2 bg-blue-100 p-2  rounded-lg">User:</label>
                    <input className="bg-blue-100 rounded-lg m-2 p-2" placeholder="User Name Here..." type="text" id="user" name="user" value={message.user} onChange={handleChange}></input>
                </div>
                <div className="flex w-full max-w-md justify-center">
                    <label htmlFor="text" className="m-2 bg-blue-100 p-2 rounded-lg">Text:</label>
                    <input type="text" className="bg-blue-100 rounded-lg m-2 p-2" placeholder="User Message Here..." id="text" name="text" value={message.text} onChange={handleChange}></input>
                </div>
                <div>
                    <button type="submit" className="m-2 bg-green-300 p-2 rounded-lg">Submit</button>
                </div>
            </form>
            {error && <p className="bg-red-500 max-w-xs p-2 rounded-lg flex justify-center">{error}</p>}
        </div>
    )
}

export default MessageForm