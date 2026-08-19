import { useParams } from "react-router"
import { useEffect, useState } from "react"

function DetailBlogCard(){
    const { id } = useParams()
    const [blog, setBlog] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadBlog() {
            try {
                const response = await fetch(`http://localhost:3000/blogs/${id}`)
                const data = await response.json()
                if(!response.ok) throw new Error(data.error)
                setBlog(data)
            } catch(error)  {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        loadBlog()
    }, [id])

    return(
        <div className="flex m-4 rounded-lg flex-col items-start justify-start">
            {loading && <p className="bg-gray-100 pl-16 rounded-lg justify-center">Loading blog please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            {!error && !loading && <p className="flex flex-wrap justify-center  p-2 rounded-lg grow-1 text-4xl font-medium">{blog.title}</p>}
            {!error && !loading && <p className="flex flex-wrap justify-center max-w-5xl bg-blue-100 p-2 rounded-lg grow-1">{blog.body}</p>}
        </div>
        )
}

export default DetailBlogCard