import React, { useState } from "react";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import "../style/HomePage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="homePageParent">
        <div className="container homeDiv">
          <div className="jumbotron">
            <div className="dashboard-div">
              <h1> Welcome to Student Performance Analysis System </h1>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="dashboard-div">
              <Link to="/list-users" className="">
                <button className="btn btn-primary btn-lg">
                  Go To Dashboard
                </button>
              </Link>
            </div>
            <div className="dashboard-div">
              <Link to="/login" className="">
                <button className="btn btn-primary btn-lg">Login or Signup</button>
              </Link>
            </div>
            {/* <div className="dashboard-div">
              <Link to="/signup" className="">
                <button className="btn btn-primary btn-lg">Signup</button>
              </Link>
            </div> */}

            {/* <li>
                <Link
                  to="/list-teachers"
                  className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                >
                  Teachers List
                </Link>
              </li>

              <li>
                <Link
                  to="/list-hod"
                  className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                >
                  Hod List
                </Link>
              </li>
              <li>
                <Link
                  to="/list-students"
                  className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                >
                  Students List
                </Link>
              </li>
              <li>
                <Link
                  to="/list-reviews"
                  className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                >
                  Reviews List
                </Link>
              </li> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
