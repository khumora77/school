import { Route, Routes, Navigate } from 'react-router-dom'
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
        {/* Default ochilganda /uz ga yo‘naltiradi */}
        <Route path="/" element={<Navigate to="/uz" replace />} />

        <Route path="/:lng" element={<Home />} />
        <Route path="/:lng/about" element={<About />} />
        <Route path="/:lng/contact" element={<Contact />} />
        <Route path="/:lng/news" element={<News />} />
        <Route path="/:lng/teachers" element={<Teachers />} />
        <Route path="/:lng/pupils" element={<Pupils />} />

        {/* Noto‘g‘ri url kiritilsa ham home ga qaytaradi */}
        <Route path="*" element={<Navigate to="/uz" replace />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
