import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skils from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skils/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
