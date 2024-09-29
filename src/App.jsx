import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './myComponents/Navbar'
import PageNotFound from './pages/PageNotFound'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogSingle from './pages/BlogSingle'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  return (
    <>
      <Router>
        <Toaster position='top-center' richColors />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:slug' element={<BlogSingle />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )

}

export default App