import React from "react";
import Sidebar from "./Sidebar";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../resources/style/profile.css";
import { ProgressBarContainer as ProgressBar } from "progress_bar_for_react";

export default function Tables() {
  const percentage = 60;
  return (
    <>
      <nav style={{ marginTop: "35px", marginLeft: "20%" }}>
        <ul>
          <li>
            <Link to="/dashboard" className="text-white">
              <Icon.HouseFill className="mb-1" />
            </Link>
          </li>
          <li>
            <Link to="/tables" className="text-white nav-link mx-1 mylink-1">
              Tables
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
      <Icon.GearFill
        className="bg-primary"
        style={{
          position: "fixed",
          color: "white",
          bottom: "30px",
          right: "30px",
          fontSize: "40px",
          borderRadius: "100%",
          border: "1px solid white",
          padding: "10px",
        }}
      ></Icon.GearFill>

      <div
        style={{
          padding: "10px",
          marginTop: "35px",
          marginLeft: "18%",
          background: "#091434",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <table className="text-white">
          <thead>
            <tr>
              <th className="col-md-0">
                <b>Authors' Table</b>
              </th>
            </tr>
          </thead>
        </table>
        <table className="text-white mt-4 w-100">
          <thead
            style={{
              fontSize: "10px",
              color: "white",
              opacity: "0.5",
              borderBottom: "1px solid gray",
            }}
          >
            <tr>
              <th className="py-2">AUTHOR</th>
              <th>FUNCTION</th>
              <th>STATUS</th>
              <th>EMPLOYED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody
            style={{
              fontSize: "12px",
              color: "white",
              borderBottom: "1px solid gray",
            }}
          >
            <tr>
              <td className="py-2">
                <Icon.CloudFogFill
                  className="text-info mb-1"
                  style={{ fontSize: "30px", float: "left" }}
                />
                <p style={{ float: "left", paddingLeft: "10px" }}>
                  <b>Mark Johnson</b>
                  <br />
                  mark@gmail.com
                </p>
              </td>

              <td>
                <b>Manager</b>
                <br />
                Organization
              </td>
              <td>
                <Link
                  to="#"
                  className="text-white nav-link px-2 py-0"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "green",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  Online
                </Link>
              </td>
              <td>12/05/2015</td>
              <td>
                <b>
                  <Link to="/editProfile" className="text-white nav-link mx-1">
                    Edit
                  </Link>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          padding: "10px",
          marginTop: "35px",
          marginLeft: "18%",
          background: "#091434",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <table className="text-white">
          <thead>
            <tr>
              <th className="col-md-0">
                <b>Projects' Table</b>
              </th>
            </tr>
          </thead>
        </table>
        <table className="text-white mt-4 w-100">
          <thead
            style={{
              fontSize: "10px",
              color: "white",
              opacity: "0.5",
              borderBottom: "1px solid gray",
            }}
          >
            <tr>
              <th className="py-2">PROJECT</th>
              <th>BUDGET</th>
              <th>STATUS</th>
              <th>COMPLETION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody
            style={{
              fontSize: "12px",
              color: "white",
              borderBottom: "1px solid gray",
            }}
          >
            <tr>
              <td className="py-2">
                <Icon.CloudFogFill
                  className="text-info mb-1"
                  style={{ float: "left" }}
                />
                <p style={{ float: "left", paddingLeft: "10px" }}>
                  <b>Chakra Vision UI Version</b>
                </p>
              </td>

              <td className="col-md-2">
                <b>14,000$</b>
              </td>
              <td className="col-md-2">Working</td>
              <td className="col-md-2">
                <b className="px-3">60%</b>
                <ProgressBar percentage={percentage} tooltip={percentage} fillerExtraStyles={{backgroundColor:"skyblue"}} progressBarExtraStyles={{width:"80%", marginLeft:"-20%"}} />
              </td>
              <td className="col-md-2">
                <Icon.ThreeDotsVertical className="mb-1 mx-3" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Sidebar page="tables" />
    </>
  );
}
