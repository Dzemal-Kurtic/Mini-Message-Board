function BlogCard({blog, handleDelete}){
    return(
        <div>
            <div className="flex flex-col items-start">
                <p className="flex flex-wrap justify-center  p-2 rounded-lg grow-1 text-4xl font-medium">{blog.title}</p>
                <p className="flex flex-wrap justify-center max-w-5xl bg-blue-100 p-2 rounded-xs border-l-6 grow-1">{blog.body}</p>
                <div className="flex justify-end self-end gap-4">
                    <button className="p-2 min-w-16 bg-gray-300 rounded-lg mt-2 hover:shadow-xl" >Edit</button>
                    <button className="p-2 min-w-16 bg-gray-300 rounded-lg mt-2 hover:shadow-xl " onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard