import "./App.css";
import "./style/c.css";
import SignupAndLogin from "./Pages/SignupAndLogin";
import HomePage from "./Pages/HomePage";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import ListAllUsers from "./Pages/ListAllUsers";
import ListAllTeachers from "./Pages/ListAllTeachers";
import AddStudentDetails from "./Pages/StudentDetails";
// import AddReview from "./Pages/AddReview";
import ListAllHod from "./Pages/ListAllHod";
import ListAllStudents from "./Pages/ListAllStudents";
import UploadMarks from "./Pages/UploadMarks";
import ListMarks from "./Pages/ListMarks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupAndLogin />} />
        <Route exact path="/login" element={<SignupAndLogin />} />
        <Route exact path="/list-users" element={<ListAllUsers />} />
        <Route exact path="/list-teachers" element={<ListAllTeachers />} />
        <Route exact path="/list-hod" element={<ListAllHod />} />
        <Route exact path="/list-students" element={<ListAllStudents />} />
        <Route exact path="/upload" element={<UploadMarks />} />
        <Route exact path="/list-marks" element={<ListMarks />} />
        <Route
          exact
          path="/add-student-details"
          element={<AddStudentDetails />}
        />
        {/* <Route exact path="/add-review" element={<AddReview />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
