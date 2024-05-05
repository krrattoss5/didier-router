
import { Router } from './Router.jsx'
import Route from './Route.jsx'
import { Suspense,lazy } from 'react'
const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const Search = lazy(() => import('./pages/Search.jsx'))

const routes = [
  {
    path: '/search/:query',
    Component: Search
  }
]

function App() {

  return (
    <main>
      <Suspense>
        <Router routes={routes}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
