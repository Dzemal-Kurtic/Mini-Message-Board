import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function MessageForm() {
    const [blog, setBlog] = useState({
        title: "",
        snippet: "",
        body: "",
    })
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const {id} = useParams()
    
    useEffect(() => {
        if(id){
            async function loadBlog() {
            try {
                const response = await fetch(`http://localhost:3000/blogs/${id}`)
                const data = await response.json()
                if(!response.ok) throw new Error(data.error)
                setBlog(data)
            } catch(error)  {
                setError(error.message)
            }
        }
        loadBlog()
        }
    }, [id])

    function handleChange(event) {
        const {name, value} = event.target
        setError(null)
        setBlog({...blog, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let response
        try {
            if(id){
            response = await fetch(`http://localhost:3000/blogs/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
            })} else{
            response = await fetch(`http://localhost:3000/blogs/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
            })}
        
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
        <div className="flex flex-col items-start">
            <form onSubmit={handleSubmit} className="flex flex-col p-2 gap-2 items-center  ml-4 rounded-md">
                <div className="w-full min-w-lg justify-center flex flex-col">
                    <label htmlFor="title" className="p-2 grow-1 rounded-md text-lg">Title:</label>
                    <input className="border-l-6 bg-blue-100 p-2 grow-1" placeholder="Title here..." type="text" id="title" name="title" value={blog.title} onChange={handleChange}></input>
                </div>
                <div className="flex flex-col w-full min-w-lg justify-center">
                    <label htmlFor="snippet" className="m-2  grow-1 rounded-md text-lg">Snippet:</label>
                    <input type="text" className="border-l-6 bg-blue-100 p-2 grow-1" placeholder="Text snippet here..." id="snippet" name="snippet" value={blog.snippet} onChange={handleChange}></input>
                </div>
                  <div className="flex flex-col w-full min-w-lg justify-center">
                    <label htmlFor="body" className="p-2 rounded-lg grow-1 text-lg">Body:</label>
                    <textarea className="border-l-6 bg-blue-100 p-2 grow-1" placeholder="Body of the blog here..." id="body" name="body" value={blog.body} onChange={handleChange}></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-gray-300 p-2 m-6 rounded-md hover:shadow-xl">Submit</button>
                </div>
            </form>
            {error && <p className="bg-red-500 ml-6 max-w-xs p-2 rounded-lg flex justify-center">{error}</p>}
        </div>
    )
}

export default MessageForm