import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/students">Students</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/courses">Courses</Link>
      </nav>
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
