import { useEffect, useState } from "react";
import axios from "axios";

function SessionJourney({ sessionId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/session/${sessionId}`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, [sessionId]);

return (
  <div>
    <h2>User Journey Timeline</h2>

    <div className="timeline-container">
      {events.map((event) => (
        <div key={event._id} className="journey-card">
          <div
            className={
              event.eventType === "click"
                ? "event-dot click"
                : "event-dot view"
            }
          ></div>

          <div>
            <h4>
              {event.eventType
                .replace("_", " ")
                .toUpperCase()}
            </h4>

            <p>
              {event.pageTitle || event.pageUrl}
            </p>

            <small>
              {new Date(event.timestamp).toLocaleString()}
            </small>

            {event.x !== undefined &&
              event.y !== undefined && (
                <p>
                  X: {event.x} | Y: {event.y}
                </p>
              )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default SessionJourney;