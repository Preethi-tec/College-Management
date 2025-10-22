import React, { useEffect, useState } from "react";
import { getFaculty, addFaculty, deleteFaculty } from "../services/api";

function Faculty() {
  const [facultyList, setFacultyList] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    const res = await getFaculty();
    setFacultyList(res.data);
  };

  const handleAddFaculty = async () => {
    if (!name || !subject) return;
    await addFaculty({ name, subject });
    fetchFaculty();
    setName(""); setSubject("");
  };

  const handleDelete = async (id) => {
    await deleteFaculty(id);
    fetchFaculty();
  };

  return (
    <div>
      <h1>Faculty</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button onClick={handleAddFaculty}>Add Faculty</button>

      <ul>
        {facultyList.map((f) => (
          <li key={f.id}>
            {f.name} ({f.subject}){" "}
            <button onClick={() => handleDelete(f.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faculty;
