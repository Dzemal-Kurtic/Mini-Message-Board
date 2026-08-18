import { Link } from "react-router"

function Header() {
    return(
        <div className="flex justify-between gap-4 m-4 items-end pb-3 border-b-6 border-gray-400">
            <Link to="/blogs/" className="bg-blue-100 p-4 text-7xl font-semibold rounded-lg">Klix Blog Site</Link>
            <div className="flex gap-2">
                <Link to="/blogs/new" className="bg-blue-100 p-2 rounded-lg">Post a new Blog</Link>
                <Link to="/blogs/about" className="bg-blue-100 p-2 rounded-lg">About</Link>
            </div>
        </div>
    )
}

export default Header