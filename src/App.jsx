import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )

}

export default App

// template 1: https://www.wix.com/website-template/view/html/2534?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DPersonal%2BBlog%2BWebsite%2BTemplates&tpClick=view_button&esi=b3fa2040-eda3-4fa3-8e6e-e27d09767498
// template 2: https://medium.com/tag/react
// template 3: https://css-tricks.com (Home page)