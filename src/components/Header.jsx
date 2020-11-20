import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Babitas-logo.png';

const Header = (props) => {
  const [activeLink, setActiveLink] = useState('/');
  const setActiveLinkCallback = useCallback((link) => {
    setActiveLink(link);
    debugger;
  }, [activeLink, setActiveLink]);
debugger;
  return (
	  <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Babita's Spice Deli" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
          {/* <Nav className="navbar-nav ml-auto">
            <Nav.Item>
                <NavLink className="nav-link" to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </Nav.Item>
          </Nav> */}
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${activeLink === '/' ? ' active': undefined}`}>
                <Link className="nav-link" to="/" onClick={() => setActiveLinkCallback('/')}>Home</Link>
              </li>
              <li className={`nav-item${activeLink === '/menu' ? ' active': undefined}`}>
                <Link className="nav-link" to="/menu" onClick={() => setActiveLinkCallback('/menu')}>Menu</Link>
              </li>
              <li className={`nav-item${activeLink === '/about' ? ' active': undefined}`}>
                <Link className="nav-link" to="/about" onClick={() => setActiveLinkCallback('/about')}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;