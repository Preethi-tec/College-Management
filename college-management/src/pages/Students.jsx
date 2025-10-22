import React, { useEffect, useState } from "react";
import { getStudents, addStudent, deleteStudent } from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleAddStudent = async () => {
    if (!name || !email || !course) return;
    await addStudent({ name, email, course });
    fetchStudents();
    setName(""); setEmail(""); setCourse("");
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div>
      <h1>Students</h1>
      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Course" value={course} onChange={(e)=>setCourse(e.target.value)} />
      <button onClick={handleAddStudent}>Add Student</button>

      <ul>
        {students.map(s => (
          <li key={s.id}>
            {s.name} ({s.course}) <button onClick={()=>handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
