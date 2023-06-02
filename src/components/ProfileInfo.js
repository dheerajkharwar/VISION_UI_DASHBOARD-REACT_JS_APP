import React from 'react'
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ProfileInfo() {
  return (
    <>
      <h5>Profile Information</h5>
                <p style={{ fontSize: "14px" }}>
                  Hi, I'm Mark Johnson, Decisions: If you can't decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <p style={{ fontSize: "14px" }}>
                  Full Name: <b>Mark Johnson</b>
                </p>
                <p style={{ fontSize: "14px" }}>
                  Mobile: <b>(44)1231234123</b>
                </p>
                <p style={{ fontSize: "14px" }}>
                  Email: <b>mark@simmple.com</b>
                </p>
                <p style={{ fontSize: "14px" }}>
                  Location: <b>United States</b>
                </p>
                <p style={{ fontSize: "14px" }}>
                  Social:
                  <b>
                    <Link to="#" className="text-white m-1">
                      <Icon.Facebook className="mx-1" />
                    </Link>
                    <Link to="#" className="text-white m-1">
                      <Icon.Twitter className="mx-1" />
                    </Link>
                    <Link to="#" className="text-white m-1">
                      <Icon.Instagram className="mx-1" />
                    </Link>
                  </b>
                </p>
    </>
  )
}
