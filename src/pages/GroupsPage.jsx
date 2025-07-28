import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import GroupsGrid from "../components/GroupsGrid";
import "../styles/App.css";


function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <TopNavbar />
        <GroupsGrid />
      </div>
    </div>
  );
}

export default App;
