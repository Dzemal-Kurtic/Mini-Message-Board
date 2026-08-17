import { useParams } from "react-router"
import { useEffect, useState } from "react"

function DetailMessageCard(){
    const { id } = useParams()
    const [message, setMessage] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMessage() {
            try {
                const response = await fetch(`http://localhost:3000/messages/${id}`)
                const data = await response.json()
                if(!response.ok) throw new Error(data.error)
                setMessage(data)
            } catch(error)  {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        loadMessage()
    }, [id])

    return(
        <div className="flex justify-center m-4 rounded-lg flex-col items-center justify-center">
            {loading && <p className="bg-gray-100 pl-16 rounded-lg justify-center">Loading messages please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            {!error && !loading && <p className="flex flex-wrap m-2 justify-center bg-gray-300 p-2 rounded-lg grow-1">{message.user}: </p>}
            {!error && !loading && <p className="flex flex-wrap m-2 justify-center  bg-red-300 p-2 rounded-lg grow-1">{message.text}</p>}
        </div>
        )
}

export default DetailMessageCard