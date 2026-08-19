import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

function DetailBlogCard(){
    const { id } = useParams()
    const [blog, setBlog] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

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

    async function handleDelete(id){
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}`, {
                method: "DELETE"
            })
            const data = response.json()
            if(!response.ok) throw new Error(data.error)
            navigate("/blogs/")
        } catch (error) {
            setError(error.message)
        }
    }

  //  async function handleEdit(id) {
  //      try {
  //          const response = await fetch(`http://localhost.3000/blogs/create`, {
  //              method: "PUT"
   //         })
    //    } catch (error) {
     //       
    //    }
   // }

    return(
        <div className="flex m-4 rounded-lg flex-col items-start justify-start">
            {loading && <p className="bg-gray-100 pl-16 rounded-lg justify-center">Loading blog please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            {!error && !loading && <BlogCard blog={blog} handleDelete={handleDelete}/>
                //(<div className="flex flex-col items-start">
                //<p className="flex flex-wrap justify-center  p-2 rounded-lg grow-1 text-4xl font-medium">{blog.title}</p>
                //<p className="flex flex-wrap justify-center max-w-5xl bg-blue-100 p-2 rounded-lg grow-1">{blog.body}</p>
                //</div>)
                }
        </div>
        )
}

export default DetailBlogCard