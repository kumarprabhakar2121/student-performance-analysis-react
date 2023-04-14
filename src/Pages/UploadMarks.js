import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/uploadForm.css";
import AdminSideBar from "./AdminSideBar";
function UploadMarks() {
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("excel", file);
    console.log({ formData });
    axios({
      method: "post",
      url: "http://localhost:2108/mark/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        //handle success
        console.log("success");
        console.log(response);
        toast.success(response.data.msg);
      })
      .catch((response) => {
        //handle error
        // console.log("error");
        console.log({ error: response });
      });
  };

  return (
    <>
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
              <div className="container text-center">
                <h2
                  style={{ margin: "50px 33px 22px 32px", padding: "" }}
                  className="listTherapist-title"
                >
                  Upload Marks
                </h2>
                <div
                  className="container text-center"
                  style={{ backgroundColor: "#" }}
                >
                  <div className="container uploadForm col-md-11">
                    <form onSubmit={onSubmit}>
                      <h1>File Upload</h1>
                      <p> upload excel file </p>
                      <input type="file" onChange={onChange} />
                      <button className="btn btn-primary " type="submit">
                        Upload
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadMarks;
