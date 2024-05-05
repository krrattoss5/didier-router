import { useEffect, useState } from "react"
import {EVENTS} from './consts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'



function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    //escuchar el evento para adelante
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    //escuchar el evento atraz, popstate es el evento de retorceso
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    //es importante depurar los eventos siempre para que no se sobrecarguen de listeners(esta logica de depuracion es apropiada)
    return () => {
      removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
