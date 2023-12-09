import { useState } from "react"

function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero.</p>
      <a href="/about">Ir a sobre nosotros.</a>
    </>
  )

  }

function AboutPage() {

  return (
    <>
      <h1>About</h1>
      <p>¡Hola! esto es una replica de Reacty Router.</p>
      <a href="/">Ir al Home.</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
