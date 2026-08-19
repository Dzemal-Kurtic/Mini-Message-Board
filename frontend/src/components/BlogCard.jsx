import { Link } from "react-router"

function BlogCard({blog, handleDelete}){
    const id = blog.id
    return(
        <div>
            <div className="flex flex-col flex-wrap">
                <p className="w-full flex flex-wrap justify-start  p-2 rounded-lg grow-1 text-4xl font-medium">{blog.title}</p>
                <p className="w-full flex flex-wrap justify-start text-2xl max-w-5xl bg-blue-100 p-2 rounded-xs border-l-6 grow-1">{blog.body}</p>
                <div className="flex justify-end self-end gap-4">
                    <Link to={`/blogs/edit/${id}`} >
                    <button className="p-2 min-w-16 bg-gray-300 rounded-lg mt-2 hover:shadow-xl text-2xl" >Edit</button>                    
                    </Link>
                    <button className="p-2 min-w-16 bg-gray-300 rounded-lg mt-2 hover:shadow-xl text-2xl" onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard