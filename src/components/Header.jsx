import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/Babitas-logo.png';
import { push } from 'connected-react-router';

const Header = (props) => {
  const dispatch = useDispatch();
  const activeName = location.pathname;
  debugger;
  const handlePageChange = (page) => {
    debugger;
    dispatch(push(page));
  }

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
            <ul className="navbar-nav ml-auto">
              <li 
                className={`nav-item${activeName === '/' ? ' active': undefined}`}
                onClick={() => handlePageChange('/')}
              >
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li 
                className={`nav-item${activeName === '/about' ? ' active': undefined}`}
                onClick={() => handlePageChange('/about')}
              >
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;