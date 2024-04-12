import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav () {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/shifoumi">Shifoumi</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard">Classement</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav