import { Link } from "react-router"

function BlogCard({blog}) {
    return(
        <Link to={`/blogs/${blog.id}`} className="grow-1 p-2 bg-white rounded-lg flex flex-wrap flex-col justify-center">
            <p className="flex flex-wrap border-l-6 justify-start font-medium text-3xl bg-blue-100 p-2 grow-1">{blog.title}</p>
            <p className="flex flex-wrap border-l-6 justify-start text-xl bg-blue-100 p-2 grow-1">{blog.snippet}</p>
        </Link>
    )
}

export default BlogCard