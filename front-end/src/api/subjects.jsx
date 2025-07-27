import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getSubjects = () => API.get("/subjects");
export const createSubject = (newSubject) => API.post("/subjects", newSubject);
export const updateSubject = (id, updated) => API.put(`/subjects/${id}`, updated);
export const deleteSubject = (id) => API.delete(`/subjects/${id}`);
