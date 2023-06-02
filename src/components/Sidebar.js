import React from "react";
import '../resources/style/sidebar.css'
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export default function Sidebar(props) {
  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to="/dashboard"
                className={`list-group-item list-group-item-action py-2 ripple ${props.page==='dashboard'?'active':""} sidebar-link`}
                aria-current="true"
              >
                <Icon.House className="m-1 mb-2" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/tables"
                className={`list-group-item list-group-item-action py-2 ripple ${props.page==='tables'?'active':""} sidebar-link`}
                >
                <Icon.Table className="m-1 mb-2" />
                <span>Tables</span>
              </Link>
              <Link
                to="/billing"
                className={`list-group-item list-group-item-action py-2 ripple ${props.page==='billing'?'active':""} sidebar-link`}
                >
              <Icon.Receipt className="m-1 mb-2" />
                <span>Billing</span>
              </Link>
              <Link
                to="/rtl"
                className={`list-group-item list-group-item-action py-2 ripple ${props.page==='rtl'?'active':""} sidebar-link`}
                >
              <Icon.Gear className="m-1 mb-2" />
                <span>RTL</span>
              </Link>
              <b className="list-group-item list-group-item-action py-2 ripple sidebar-link">
                Account Pages
              </b>
              <Link
                to="/profile"
                className={`list-group-item list-group-item-action py-2 ripple ${props.page==='profile'?'active':""} sidebar-link`}
                >
              <Icon.Person className="m-1 mb-2" />
                <span>Profile</span>
              </Link>
              <Link
                to="/signin"
                className="list-group-item list-group-item-action py-2 ripple sidebar-link"
              >
              <Icon.PersonBadge className="m-1 mb-2" />
                <span>SignIN</span>
              </Link>
              <Link
                to="/signup"
                className="list-group-item list-group-item-action py-2 ripple sidebar-link"
              >
              <Icon.RocketTakeoff className="m-1 mb-2" />
                <span>SignUp</span>
              </Link>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
