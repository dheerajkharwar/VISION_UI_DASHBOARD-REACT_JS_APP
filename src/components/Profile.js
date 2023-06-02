import React from "react";
import Sidebar from "./Sidebar";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../resources/style/profile.css";
import "../resources/style/progressbar.css";
import CarInfo from "./CarInfo";
import ProfileInfo from "./ProfileInfo";
import Nav2 from "./Nav2";

export default function Profile() {
  return (
    <>
      <Nav2 />
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
        <table>
          <thead>
            <tr>
              <th className="col-md-0">
                <Icon.CloudFogFill
                  className="text-info mb-1"
                  style={{ fontSize: "60px" }}
                />
              </th>
              <th className="col-md-6 px-4 text-white">
                <b>Mark Johnson</b>
                <br />
                mark@gmail.com
              </th>
              <th className="col-md-2">
                <Link
                  to="/overview"
                  className="text-white nav-link px-2 py-1"
                  style={{
                    backgroundColor: "#900999",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  <Icon.Box2Fill className="mx-1" />
                  Overview
                </Link>
              </th>
              <th className="col-md-2">
                <Link to="/teams" className="text-white nav-link mx-2">
                  <Icon.MicrosoftTeams className="mx-1" />
                  Teams
                </Link>
              </th>
              <th className="col-md-2">
                <Link to="/projects" className="text-white nav-link mx-2">
                  <Icon.Cone className="mx-1" />
                  Projects
                </Link>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div style={{ marginTop: "15px", marginLeft: "18%" }}>
        <table>
          <thead>
            <tr>
              <th className="col-md-3 text-white p-4 wlcm">
                <h3 className="my-0 p-0">Welcome Back!</h3>
                <b style={{ fontSize: "12px" }}>
                  Nice to see you, Mark Johnson!
                </b>
                <div style={{height:"270px"}} />
                <Link to="/taptorec" className="text-white nav-link">
                  Tap to record
                  <Icon.ArrowRight />
                </Link>
              </th>
              <th className="col-md-0 px-2"></th>
              <th
                className="col-md-6 text-white px-4"
                style={{ backgroundColor: "#091434", borderRadius: "10px" }}
              >
                <CarInfo />
              </th>

              <th className="col-md-0 p-2"></th>
              <th
                className="col-md-3 text-white p-4"
                style={{ backgroundColor: "#091434", borderRadius: "10px" }}
              >
                <ProfileInfo />
              </th>
              <th className="col-md-0 p-2"></th>
            </tr>
          </thead>
        </table>
      </div>
      <Sidebar page="profile" />
    </>
  );
}
