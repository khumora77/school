import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/shared/navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/shared/footer'
import News from './pages/news'
import Teachers from './pages/teachers'
import Pupils from './pages/pupils'

const App = () => {
  return (
    <div>
      <Navbar/>
           <Routes>
        <Route path="/:lng" element={<Home />} />
        <Route path="/:lng/about" element={<About />} />
        <Route path="/:lng/contact" element={<Contact />} />
        <Route path="/:lng/news" element={<News />} />
         <Route path="/:lng/teachers" element={<Teachers />} />
          <Route path="/:lng/pupils" element={<Pupils />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App