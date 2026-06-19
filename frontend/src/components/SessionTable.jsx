import { useEffect, useState } from "react";
import axios from "axios";

function SessionTable({ onSelectSession }) {
  const [sessions, setSessions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events/sessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSelect = (sessionId) => {
    setSelected(sessionId);
    onSelectSession(sessionId);
  };

  return (
    <div>
      <h2>Sessions ({sessions.length})</h2>

      <div className="session-list">
        {sessions.map((session) => (
          <div
            key={session._id}
            className={`session-card ${
              selected === session._id ? "active-session" : ""
            }`}
            onClick={() => handleSelect(session._id)}
          >
            <div>
              <h4>{session._id.slice(0, 12)}...</h4>
              <p>User Session</p>
            </div>

            <div>
              <h3>{session.totalEvents}</h3>
              <span>Events</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionTable;