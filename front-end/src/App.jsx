import { Routes, Route, Navigate } from "react-router-dom";
import JoinedGroup from "./Pages/JoinedGroup";
import Dashboard from "./Pages/Dashboard"; // ✅ Add this line
import Subject from "./Pages/Subject"
import GroupsPage from "./Pages/GroupsPage";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* ✅ Redirect root to /joined */}
      <Route path="/" element={<Navigate to="/joined" />} />
      <Route path="/joined" element={<JoinedGroup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subject" element={<Subject />}/>
      <Route path="/GroupsPage" element={<GroupsPage />} />
      
    </Routes>
  );
}

export default App;
