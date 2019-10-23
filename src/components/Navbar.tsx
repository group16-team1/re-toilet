import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <p className="title">re:toire</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar