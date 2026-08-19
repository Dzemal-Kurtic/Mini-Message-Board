import { Link } from "react-router"

function BlogCardItem({blog}) {
    return(
        <Link to={`/blogs/${blog.id}`} className="w-full max-w-5xl grow-1 bg-white rounded-lg flex flex-wrap flex-col justify-center hover:shadow-xl">
            <p className="flex flex-wrap border-l-6 justify-start font-medium text-4xl bg-blue-100 p-2 grow-1">{blog.title}</p>
            <p className="flex flex-wrap border-l-6 justify-start text-2xl bg-blue-100 p-2 grow-1">{blog.snippet}</p>
        </Link>
    )
}

export default BlogCardItem