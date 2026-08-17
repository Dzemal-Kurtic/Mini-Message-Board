import { Link } from "react-router"

function MessageCard({message}) {
    return(
        <Link to={`/messages/${message.id}`} className="gap-1 grow-1 border-2 border-gray-400 p-1 bg-white rounded-lg flex flex-wrap flex-col justify-center">
            <p className="flex flex-wrap justify-center bg-gray-300 p-2 rounded-lg grow-1">{message.user}: </p>
            <p className="flex flex-wrap justify-center  bg-red-300 p-2 rounded-lg grow-1">{message.text}</p>
        </Link>
    )
}

export default MessageCard