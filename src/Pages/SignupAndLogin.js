import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import ReactDOM from "react-dom";
// import "../App.css";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";

const SignupAndLogin = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [loginemail, setLoginemail] = useState("");
  const [userRole, setuserRole] = useState("");
  // const [department, setDepartment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleLoginemailChange = (e) => {
    setLoginemail(e.target.value);
  };
  const handleuserRoleChange = (e) => {
    setuserRole(e.target.value);
  };
  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "http://localhost:2108/user/signup",
      data: {
        name,
        email,
        password,
        phone,
        department,
        userRole,
      },
    })
      .then(function (response) {
        console.log(response);
        toast.success(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
        toast("error!");
      });

    e.preventDefault();
  };
  const handleLoginSubmit = (e) => {
    axios({
      method: "post",
      url: "http://localhost:2108/user/login",
      data: {
        email: loginemail,
        password: loginpassword,
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          toast.success("Login Successful");
          // history.push("/admin");
          navigate("/list-users");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message);
      });

    e.preventDefault();
  };
  return (
    <div className="container loginParent">
      <ToastContainer />
      <div className="main">
        <div className="login-wrap main">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" />
            <label for="tab-1" className="tab">
              Log In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label for="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <form
                  onSubmit={(e) => {
                    handleLoginSubmit(e);
                  }}
                  method="post"
                >
                  <div className="group">
                    <label for="loginemail" className="label">
                      Email Address
                    </label>
                    <input
                      id="loginemail"
                      type="text"
                      className="input"
                      value={loginemail}
                      required
                      onChange={(e) => {
                        handleLoginemailChange(e);
                      }}
                    />
                  </div>
                  <div className="group">
                    <label for="loginPass" className="label">
                      Password
                    </label>
                    <input
                      id="loginPass"
                      type="password"
                      className="input"
                      data-type="password"
                      value={loginpassword}
                      required
                      onChange={(e) => {
                        handleLoginPasswordChange(e);
                      }}
                    />
                  </div>
                  {/* <div className="group">
                  <input id="check" type="checkbox" className="check" checked />
                  <label for="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
                </div> */}
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                </form>
              </div>
              <div className="sign-up-htm">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="group">
                    <label for="name" className="label">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input"
                      value={name}
                      required
                      onChange={(e) => {
                        handleNameChange(e);
                      }}
                    />
                  </div>
                  <div className="group">
                    <label for="phone" className="label">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="number"
                      className="input"
                      value={phone}
                      required
                      onChange={(e) => {
                        handlePhoneChange(e);
                      }}
                    />
                  </div>

                  <div className="group">
                    <label for="email" className="label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      className="input"
                      onChange={(e) => {
                        handleEmailChange(e);
                      }}
                    />
                  </div>
                  <div className="group">
                    <label for="password" className="label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="input"
                      data-type="password"
                      value={password}
                      onChange={(e) => {
                        handlePasswordChange(e);
                      }}
                    />
                  </div>

                  <div className="group">
                    <label for="department" className="label">
                      Department
                    </label>
                    <select
                      className="form-select group form-select-lg"
                      name="department"
                      id="department"
                      value={department}
                      required
                      onChange={(e) => {
                        handleDepartmentChange(e);
                      }}
                    >
                      <option> -select- </option>
                      <option value="CSE"> CSE </option>
                      <option value="ECE"> ECE </option>
                      <option value="EEE"> EEE </option>
                      <option value="MECH">MECH</option>
                      <option value="CIVIL">CIVIL</option>
                    </select>
                  </div>
                  <div className="group">
                    <label for="userRole" className="label">
                      userRole
                    </label>
                    <select
                      className="form-select group form-select-lg"
                      name="userRole"
                      id="userRole"
                      value={userRole}
                      required
                      onChange={(e) => {
                        handleuserRoleChange(e);
                      }}
                    >
                      <option> -select- </option>
                      <option value="student"> Student </option>
                      <option value="teacher"> Teacher </option>
                      <option value="hod"> Hod </option>
                    </select>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                    <hr />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupAndLogin;
