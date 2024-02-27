import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckScroll from './CheckScroll'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <CheckScroll/>
    <Routes className='appRoutes'>

      <Route path='/' element={< Home />} />
      <Route path='/about' element={< About />} />
      
      {/*<Route path='/news' element={< News />} />
      <Route path='/atelier' element={< Atelier />} />
      <Route path='/contact' element={< Contact />} />

      <Route path='/:category' element={< GalleryContainer />} />
      <Route path='/prensa/:id' element={< NewsDetail />} /> */}
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
