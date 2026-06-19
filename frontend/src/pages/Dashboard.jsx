import { useState, useEffect } from "react";
import axios from "axios";

import SessionTable from "../components/SessionTable";
import SessionJourney from "../components/SessionJourney";
import Heatmap from "../components/Heatmap";
import AnalyticsChart from "../components/AnalyticsChart";

function Dashboard() {
  const [selectedSession, setSelectedSession] = useState(null);

  const [stats, setStats] = useState({
    sessions: 0,
    events: 0,
    clicks: 0,
    pageViews: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const sessionsRes = await axios.get(
          "https://causalfunnel-analytics-dashboard.onrender.com/api/events/sessions"
        );

        const eventsRes = await axios.get(
          "https://causalfunnel-analytics-dashboard.onrender.com/api/events"
        );

        const events = eventsRes.data;

        setStats({
          sessions: sessionsRes.data.length,
          events: events.length,
          clicks: events.filter(
            (e) => e.eventType === "click"
          ).length,
          pageViews: events.filter(
            (e) => e.eventType === "page_view"
          ).length,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();

    const interval = setInterval(() => {
      fetchStats();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const chartData = [
    {
      name: "Clicks",
      value: stats.clicks,
    },
    {
      name: "Page Views",
      value: stats.pageViews,
    },
  ];

  return (
    <div>
      <h1>CausalFunnel Analytics Dashboard</h1>

      <div className="live-badge">
        <span className="live-dot"></span>
        Live Tracking Active
      </div>

      <p
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#94a3b8",
        }}
      >
        Real-time User Behavior Tracking & Analytics
      </p>

      {/* Stats Cards */}
      <div className="dashboard-grid">
        <div className="card">
          <h3>Total Sessions</h3>
          <p>{stats.sessions}</p>
        </div>

        <div className="card">
          <h3>Total Events</h3>
          <p>{stats.events}</p>
        </div>

        <div className="card">
          <h3>Click Events</h3>
          <p>{stats.clicks}</p>
        </div>

        <div className="card">
          <h3>Page Views</h3>
          <p>{stats.pageViews}</p>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="section">
        <h2>User Behavior Analytics</h2>
        <AnalyticsChart data={chartData} />
      </div>

      {/* Sessions */}
      <div className="section">
        <SessionTable
          onSelectSession={setSelectedSession}
        />
      </div>

      {/* Journey + Heatmap */}
      <div className="analytics-row">
        <div className="section">
          {selectedSession ? (
            <SessionJourney
              sessionId={selectedSession}
            />
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "#94a3b8",
              }}
            >
              <h2>Select a Session</h2>
              <p>
                Click any session card to view
                the complete user journey.
              </p>
            </div>
          )}
        </div>

        <div className="section">
          <Heatmap />
        </div>
      </div>

      <footer
  style={{
    textAlign:"center",
    marginTop:"40px",
    color:"#64748b",
    paddingBottom:"20px"
  }}
>
  © 2026 Vinay Pal • MERN Stack • MongoDB Atlas • React • Node.js
</footer>
    </div>
  );
}

export default Dashboard;