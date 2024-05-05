import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Search from './pages/Search.jsx'
import { Router } from './Router.jsx'

const routes = [
  {
    path: '/search/:query',
    Component: Search
  }
]

function App() {

  return (
    <main>
      <Router routes={routes}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
