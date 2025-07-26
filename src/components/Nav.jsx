import { Link } from "react-router-dom";

function Nav () {
  return (
      <nav className="nav-container">
        <Link to={"/"} style={{ textDecoration: 'none', color: '#040404ff'}}><strong>Bra Fitting Advisor</strong></Link>
      </nav>
  )
}

export default Nav