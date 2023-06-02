import React from 'react'
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Nav2() {
  return (
    <div>
      <nav style={{ marginTop: "35px", marginLeft: "20%" }}>
        <ul>
          <li>
            <Link to="/dashboard" className="text-white">
              <Icon.HouseFill className="mb-1" />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white nav-link mx-1 mylink-1">
              Profile
            </Link>
          </li>
          <li>
            <div className="input-group">
              <span className="input-group-text sicon" id="basic-addon1">
                <Icon.Search />
              </span>
              <input
                style={{
                  width: "150px",
                  padding: 0,
                  borderRadius: "0 20px 20px 0",
                }}
                type="search"
                className="form-control sbox"
                placeholder="Type here..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <Link to="/signin" className="text-white nav-link mx-2">
                <Icon.PersonCircle className="mx-1" />
                SignIn
              </Link>
              <Link to="/setting" className="text-white nav-link mx-2">
                <Icon.GearFill />
              </Link>
              <Link to="/notification" className="text-white nav-link mx-2">
                <Icon.BellFill />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
