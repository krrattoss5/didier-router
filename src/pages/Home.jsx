import {Link} from '../Link'

export default function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero.</p>
      <br />
      <Link to='/about'>Ir a sobre nosotros.</Link>
    </>
  )

}