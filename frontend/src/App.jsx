import { BrowserRouter, Routes, Route } from "react-router"

import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"
import DetailBlogCard from "./components/DetailBlogCard"
import BlogForm from "./components/BlogForm"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/blogs" element={<Home />} />
        <Route path="/blogs/about" element={<About />} />
        <Route path="/blogs/:id" element={<DetailBlogCard />} />
        <Route path="/blogs/new" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
