// src/components/Profile.js

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>My Profile</h3>
        <p>78% Yours, Progress</p></div>
      <div className="profile-avatar">
        <img src="photo.png" alt="Avatar" />
         <h3>Vansh kumar</h3>
      </div>
      <p className="profile-email">vanshnayyar54@gmail.com</p>
     

      <div className="profile-section">
        <h5>Today</h5>
        <div className="task">
          <span className="task-icon">📅</span>
          <p>DBMS SSsecure Progress</p>
        </div>
        <div className="task">
          <span className="task-icon">📅</span>
          <p>Creating "Join New Project" Button</p>
        </div>
        <div className="task">
          <span className="task-icon">🔧</span>
          <p>Operating System</p>
        </div>
      </div>

      <div className="profile-section">
        <h5>Team</h5>
        <div className="team-member">
          <img src="photo2.jpg" alt="Albert" />
          <div>
            <p>Nitin Raina</p>
            <small>Mentor</small>
          </div>
          <span className="status online"></span>
        </div>
        <div className="team-member">
          <img src="photo4.png" alt="Noran" />
          <div>
            <p>Anmol Saini</p>
            <small>Student</small>
          </div>
          <span className="status away"></span>
        </div>
        <div className="team-member">
          <img src="photo3.jpeg" alt="Albert" />
          <div>
            <p>Parmveer Nandal</p>
            <small>Mentor</small>
          </div>
          <span className="status online"></span>
        </div>
        <div className="team-member">
          <img src="photo4.png" alt="Noran" />
          <div>
            <p>Rohit Sharma</p>
            <small>Student</small>
          </div>
          <span className="status away"></span>
        </div>
        <div className="team-member">
          <img src="photo4.png" alt="Noran" />
          <div>
            <p>John Div</p>
            <small>Student</small>
          </div>
          <span className="status away"></span>
        </div>
      </div>
    </div>
  );
}

