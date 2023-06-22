import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="headerContainer">
    <div className="logoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="titles">Wave</h1>
    </div>
    <ul className="unorderedContainer">
      <li className="titles">
        <Link to="/">Home</Link>
      </li>
      <li className="titles">
        <Link to="/about">About</Link>
      </li>
      <li className="titles">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
