import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "../App.css";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";

// toast.configure();

const TeacherSidebar = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(false);

  return (
    <>
      <div className="col-md-3">
        <div className="border-end bg-white " id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">
            {/* <Link to="./ListTherapists"> */}
            <i class="fas fa-spa"></i>
            {/* </Link> */}
          </div>
          <div className="list-group list-group-flush left-side">
            <a>
              <div className="t1">
                <p>Teacher Dashboard</p>
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
          
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherSidebar;
