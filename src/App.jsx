import { useEffect, useState } from "react"
import {EVENTS} from './consts.js'

function navigate(href){
  window.history.pushState({}, '', href)
  //CREAR EVENTO PERSONALIZADO
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //ENVIAR EL EVENTO
  window.dispatchEvent(navigationEvent)
}

function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero.</p>
      <a href="/about">Ir a sobre nosotros.</a>
      <br />
      <button onClick={() => navigate('/about')}>move</button>
    </>
  )

}

function AboutPage() {

  return (
    <>
      <h1>About</h1>
      <p>¡Hola! esto es una replica de Reacty Router.</p>
      <a href="/">Ir al Home.</a>
      <br />
      <button onClick={() => navigate('/')}>move</button>
    </>
  )
}

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
