import { Routes, Route, Navigate } from "react-router-dom";
import JoinedGroup from "./Pages/JoinedGroup/JoinedGroup";
import "./styles.css";
function App() {
  return (
    <Routes>
      {/* ✅ Redirect root to /joined */}
      <Route path="/" element={<Navigate to="/joined" />} />

      <Route path="/joined" element={<JoinedGroup />} />
    </Routes>
  );
}

export default App;
