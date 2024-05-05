import { EVENTS } from "./consts"

function navigate(href){
  window.history.pushState({}, '', href)
  //CREAR EVENTO PERSONALIZADO
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //ENVIAR EL EVENTO
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to , ...props }){
  const handleClick = (event) => {
    event.preventDefault()

    const isMainEvent = event.button === 0 // primaryclick
    const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      navigate(to) // navegacion con SPA
    }
  }

  return <a href={to} target={target} onClick={handleClick} {...props} />
}