import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Assuming a local API server

export const getStudents = () => axios.get(`${API_URL}/students`);
export const addStudent = (student) => axios.post(`${API_URL}/students`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);

export const getFaculty = () => axios.get(`${API_URL}/faculty`);
export const addFaculty = (faculty) => axios.post(`${API_URL}/faculty`, faculty);
export const deleteFaculty = (id) => axios.delete(`${API_URL}/faculty/${id}`);

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const addCourse = (course) => axios.post(`${API_URL}/courses`, course);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);