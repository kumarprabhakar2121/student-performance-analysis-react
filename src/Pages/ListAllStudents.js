import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "../App.css";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

// toast.configure();

const ListAllStudents = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(false);
  let count = 0;
  useEffect(() => {
    axios
      .get("http://localhost:2108/user/list?userRole=student")
      .then((res) => {
        if (res.data.results.length > 0) {
          setPosts(res.data.results);
          count++;
          count == 1
            ? toast.success(`${res.data.total_count} students found!`)
            : console.log();
        } else {
          alert("no student found");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <AdminSideBar />
            </div>
            <div className="col-md-9">
              <div className="container-fluid">
                <link
                  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <div className="container">
                  <h2
                    style={{ margin: "0 20px" }}
                    className="listTherapist-title"
                  >
                    Students List
                  </h2>
                  <div className="container" style={{ backgroundColor: "#" }}>
                    <div className="row " style={{ backgroundColor: "" }}>
                      <div
                        className="col-12 col-md-10 col-lg-8 "
                        style={{ marginLeft: "42px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-box clearfix">
                        <div className="table-responsive">
                          <table className="table user-list text-center">
                            <thead>
                              <tr>
                                <th>
                                  <span>
                                    {" "}
                                    <strong>Name</strong>{" "}
                                  </span>
                                </th>

                                <th>phone</th>
                                <th>email</th>
                                <th>user role</th>
                                <th>change user role</th>
                              </tr>
                            </thead>
                            <tbody>
                              {posts.map((post) => (
                                <tr key={posts.id}>
                                  <td style={{ width: "15%" }}>{post.name}</td>
                                  <td style={{ width: "10%" }}>{post.phone}</td>
                                  <td style={{ width: "10%" }}>{post.email}</td>
                                  <td style={{ width: "10%" }}>
                                    {post.userRole}
                                  </td>

                                  <td style={{ width: "30%" }}>
                                    <div>
                                      <button className="btn btn-primary">
                                        change to teacher
                                      </button>
                                    </div>
                                    <hr />
                                    <div>
                                      <button className="btn btn-primary">
                                        change to hod
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
  <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
};

export default ListAllStudents;
