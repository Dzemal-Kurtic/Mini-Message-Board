import { useState } from "react"
import { useNavigate } from "react-router"

function MessageForm() {
    const [blog, setBlog] = useState({
        title: "",
        snippet: "",
        body: "",
    })
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target
        setError(null)
        setBlog({...blog, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/blogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })

        const data = await response.json()
        if(!response.ok){
            throw new Error(data.error)
        }
        navigate("/blogs/")
        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2 items-center  m-4 rounded-md">
                <div className="w-full max-w-md justify-center flex">
                    <label htmlFor="title" className="m-2 bg-blue-100 p-2  rounded-md">Title:</label>
                    <input className="bg-blue-100 rounded-lg m-2 p-2" placeholder="Title here..." type="text" id="title" name="title" value={blog.title} onChange={handleChange}></input>
                </div>
                <div className="flex w-full max-w-md justify-center">
                    <label htmlFor="snippet" className="m-2 bg-blue-100 p-2 rounded-lg">Snippet:</label>
                    <input type="text" className="bg-blue-100 rounded-lg m-2 p-2" placeholder="Text snippet here..." id="snippet" name="snippet" value={blog.snippet} onChange={handleChange}></input>
                </div>
                  <div className="flex w-full max-w-md justify-center">
                    <label htmlFor="body" className="m-2 bg-blue-100 p-2 rounded-lg">Body:</label>
                    <input type="text" className="bg-blue-100 rounded-lg m-2 p-2" placeholder="Body of the post here..." id="body" name="body" value={blog.body} onChange={handleChange}></input>
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