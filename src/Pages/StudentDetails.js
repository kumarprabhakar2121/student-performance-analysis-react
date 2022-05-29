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
import "../style/Student_Detail.css";

// toast.configure();

const AddStudentDetails = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2108/user/list?userRole=teacher")
      .then((res) => {
        setPosts(res.data.results);

        console.log(res.data);
        // setTimeout(() => {
        toast.success(`${res.data.total_count} teachers found!`);
        // }, 4000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  }, []);

  return (
    <>
      <div className=" container pk">
        <h1>STUDENTS DETAILS</h1>
        <>
          <div className="text_field">
            <input type={"text"} required />
            <span />
            <label>Your Name</label>
          </div>
          <div className="text_field">
            <input type={"text"} required />
            <span />
            <label>College Name</label>
          </div>
          <div className="text_field">
            <input type={"text"} required />
            <span />
            <label>Course</label>
          </div>
          <div className="text_field">
            <input type={"number"} required />
            <span />
            <label>Session Start Year</label>
          </div>
          <div className="text_field">
            <input type={"number"} required />
            <span />
            <label>Session End Year</label>
          </div>
          <div className="mb-5">
            <input type={"submit"} value="Submit" />
          </div>
        </>
      </div>
    </>
  );
};

export default AddStudentDetails;
