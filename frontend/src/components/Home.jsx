import { useState, useEffect } from "react"

import BlogCardItem from "./BlogCardItem"

function Home(){
    const [blogs, setBlogs] = useState([])
    const [query, setQuery] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadBlogs() {
            try{
            const response = await fetch("http://localhost:3000/blogs/")
            const data = await response.json()
            if(!response.ok) throw new Error(data.error)
            setBlogs(data)
            }catch(error){
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])

    const filteredBlogs = blogs.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()))
    
    return(
        <div className="m-2 flex gap-4 rounded-lg flex-wrap flex-col justify-start items-start ">
            {loading && <p className="bg-gray-100 pl-16">Loading messages please wait</p>}
            {error && <p className="bg-red-500 p-2 rounded-lg flex justify-center">{error}</p>}
            <div className="p-2 mt-8">
            {blogs.length > 0 && <div className="flex justify-center rounded-md text-5xl font-semibold">All published blogs</div>}
            </div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}className="text-2xl ml-2 p-2 bg-green-100  rounded-lg focus:outline-none focus:ring-0 focus:border-transparent" placeholder="Search for blogs"></input>
            {!error && !loading && filteredBlogs.map((b) => (
                <BlogCardItem key={b.id} blog={b}/>))}
        </div> 
    )
}

export default Home