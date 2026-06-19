import { useEffect, useState } from "react";
import axios from "axios";

function Heatmap() {
  const [events, setEvents] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const pages = [
  ...new Set(
    events
      .map((e) => e.pageUrl)
      .filter((page) => page !== "/de.html")
  ),
];


  const clickEvents = events.filter(
    (e) =>
      e.eventType === "click" &&
      (selectedPage === "" || e.pageUrl === selectedPage)
  );

  return (
    <div>
      <div className="heatmap-header">
        <div>
          <h2>Heatmap Analysis</h2>
          <p>
            Visual representation of user click activity
          </p>
        </div>

        <div className="heat-badge">
           {clickEvents.length} Clicks
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          <option value="">All Pages</option>

          {pages.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>

      <div className="heatmap-stats">
        <div>
          <span>Total Clicks</span>
          <h3>{clickEvents.length}</h3>
        </div>

        <div>
          <span>Selected Page</span>
          <h3>
            {selectedPage || "All Pages"}
          </h3>
        </div>
      </div>

      <div className="heatmap-box">
        {clickEvents.map((event) => (
          <div
            key={event._id}
            className="dot"
            style={{
              left: event.x,
              top: event.y,
            }}
            title={`X:${event.x} Y:${event.y}`}
          />
        ))}
      </div>

      <div className="heatmap-legend">
        <span>Low Activity</span>

        <div className="legend-bar"></div>

        <span>High Activity</span>
      </div>
    </div>
  );
}

export default Heatmap;