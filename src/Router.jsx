import React,{ useState, useEffect } from "react"
import { EVENTS } from "./consts"
import { match } from 'path-to-regexp'
import NotFound from './pages/NotFound'

export function Router({ routes, defaultComponent: DefaultComponent = () => <NotFound /> }) {
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

  let routeParams = {}

  const Page = routes.find(({ path }) =>{
    if(path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matchedUrl = matcherUrl(currentPath)
    if(!matchedUrl) return false

    routeParams = matchedUrl.params
    return true
  })?.Component
  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}