import React from 'react'

export default function Search({routeParams}) {
  return (
    <h1>{`Has buscado ${routeParams.query}`}</h1>
  )
}
