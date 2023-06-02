import React from "react";
import '.././App.css'
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="mynav">
      <nav className={`navbar navbar-expand-lg border-top-0 ${props.border} rounded-4 py-1 mynav-child`}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link className="nav-link active text-white" aria-current="page" to="/dashboard">
                <Icon.Disc className="mb-1 mx-1" />Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/profile">
                <Icon.Person className="mb-1 mx-1" />Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/signup">
                <Icon.PersonCircle className="mb-1 mx-1" />SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/signin">
                <Icon.Key className="mb-1 mx-1" />SignIn
                </Link>
              </li>
            </ul>
              <button type="button" className="btn btn-primary rounded-3 py-1">Buy Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
