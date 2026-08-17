import { Link } from "react-router"

function Header() {
    return(
        <div className="flex justify-center gap-4 m-4  p-2 rounded-lg border-gray-400">
            <Link to="/messages/" className="bg-blue-100 p-2 rounded-lg">All Messages</Link>
            <Link to="/messages/new" className="bg-blue-100 p-2 rounded-lg">Post a new Message</Link>
        </div>
    )
}

export default Header