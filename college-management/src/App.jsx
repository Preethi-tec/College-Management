import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-800 text-white p-4 space-y-4">
          <h2 className="text-2xl font-bold mb-6">College Admin</h2>
          <Link to="/students" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Students</Link>
          <Link to="/faculty" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Faculty</Link>
          <Link to="/courses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Courses</Link>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex justify-between items-center bg-white shadow p-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            {/* User/Auth related items could go here */}
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
            <Routes>
              <Route path="/students" element={<Students />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/" element={<h2 className="text-2xl font-bold">Welcome to the Dashboard!</h2>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
