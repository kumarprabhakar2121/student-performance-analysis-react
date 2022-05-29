import React, { useState, useEffect } from "react";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import "../style/sidebar.css";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
// toast.configure();

const AdminSideBar = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(false);

  return (
    <>
      <div className="col-md-3 mysidebar">
        <div className="border-end bg-white " id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">
            {/* <Link to="./ListTherapists"> */}
            <i class="fas fa-spa"></i>
            {/* </Link> */}
          </div>
          <div className="list-group list-group-flush left-side">
            <a>
              <div className="t1">
                <p>Dashboard</p>
              </div>
            </a>
            <Link
              to="/list-users"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Users List
            </Link>
            <Link
              to="/list-teachers"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Teachers List
            </Link>
            <Link
              to="/list-hod"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Hod List
            </Link>
            <Link
              to="/list-students"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Students List
            </Link>
            <Link
              to="/list-marks"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Marks List
            </Link>
            <Link
              to="/upload"
              className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
            >
              Upload marks
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
