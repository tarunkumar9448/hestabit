import React, {Component} from 'react';
import logo from '../images/logo.png';
import './nav.scss';


class Nav extends Component{
  render(){
  return (
   <nav className="navbar navbar-expand-md navbar-dark sticky-top py-md-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo img-fluid" alt="logo" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarcollapse">
          <ul className="navbar-nav ml-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link px-lg-4" href="/">Driver</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-lg-4" href="/">Deliver</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-lg-4" href="/">Business</a>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <a href="/" className="btn btn-outline-light ml-3">Login</a>
            <a href="/" className="btn btn-outline-light ml-3">Register</a>
          </div>
        </div>
      </div>
    </nav>
 );
}
}

export default Nav;
