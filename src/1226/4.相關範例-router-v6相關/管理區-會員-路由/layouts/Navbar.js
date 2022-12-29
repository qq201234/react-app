import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div className="menu">
        <Link to="/member">會員管理區</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>
      </div>
    </div>
  )
}

export default Navbar
