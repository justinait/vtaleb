import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckScroll from './CheckScroll'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Academy from './Components/Academy/Academy'
import Contact from './Components/Contact/Contact'
import ServicesDetail from './Components/Services/ServicesDetail'
import CoursesDetails from './Components/Academy/CoursesDetails'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <CheckScroll/>
    <Routes className='appRoutes'>

      <Route path='/' element={< Home />} />
      <Route path='/about' element={< About />} />
      <Route path='/academy' element={< Academy />} />
      <Route path="/courses/:id" element={<CoursesDetails />} />
      <Route path='/contact' element={< Contact />} />
      
      <Route path="/services/:id" element={<ServicesDetail />} />
      <Route path='/services' element={< Services />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
