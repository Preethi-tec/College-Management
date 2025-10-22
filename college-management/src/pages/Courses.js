import React, { useEffect, useState } from "react";
import { getCourses, addCourse, deleteCourse } from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await getCourses();
    setCourses(res.data);
  };

  const handleAddCourse = async () => {
    if (!name || !faculty) return;
    await addCourse({ name, faculty });
    fetchCourses();
    setName(""); setFaculty("");
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  return (
    <div>
      <h1>Courses</h1>
      <input
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Faculty Name"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
      />
      <button onClick={handleAddCourse}>Add Course</button>

      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.name} ({c.faculty}){" "}
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
