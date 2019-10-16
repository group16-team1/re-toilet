import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href={window.location.origin}>
          <p className="title">re:toire</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar