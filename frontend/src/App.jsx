import { BrowserRouter, Routes, Route } from "react-router"

import Home from "./components/Home"
import Header from "./components/Header"
import DetailMessageCard from "./components/DetailMessageCard"
import MessageForm from "./components/MessageForm"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/messages" element={<Home />} />
        <Route path="/messages/:id" element={<DetailMessageCard />} />
        <Route path="/messages/new" element={<MessageForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
