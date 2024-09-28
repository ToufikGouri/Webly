import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './myComponents/Navbar'
import PageNotFound from './pages/PageNotFound'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Blogs from './pages/Blogs'

const App = () => {

  return (
    <>
      <Router>
        <Toaster position='top-center' richColors />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )

}

export default App