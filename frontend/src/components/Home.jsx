import { useState, useEffect } from "react"

import BlogCardItem from "./BlogCardItem"

function Home(){
    const [blog, setBlog] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadBlogs() {
            try{
            const response = await fetch("http://localhost:3000/blogs/")
            const data = await response.json()
            if(!response.ok) throw new Error(data.error)
            setBlog(data)
            }catch(error){
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])
    
    return(
        <div className="m-2 flex gap-4 rounded-lg flex-wrap flex-col justify-start items-start">
            {loading && <p className="bg-gray-100 pl-16">Loading messages please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            <div className="p-2 mt-8">
            {blog.length > 0 && <div className="flex justify-center p-2 rounded-md text-4xl">All published blogs</div>}
            </div>
            {!error && !loading && blog.map((b) => (
                <BlogCardItem key={b.id} blog={b}/>))}
        </div> 
    )
}

export default Home