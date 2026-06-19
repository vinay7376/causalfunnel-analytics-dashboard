# CausalFunnel Analytics Dashboard

## Overview

CausalFunnel Analytics Dashboard is a full-stack user analytics platform developed as part of the CausalFunnel Full Stack Engineer Assignment.

The application tracks user interactions on a webpage, stores event data in MongoDB Atlas, and visualizes user behavior through an interactive analytics dashboard. It provides session tracking, user journey analysis, event analytics, and click heatmap visualization to help understand user engagement patterns.

---

## Live Demo

**Frontend (Vercel):**

https://causalfunnel-analytics-dashboard.vercel.app

**Backend API (Render):**

https://causalfunnel-analytics-dashboard.onrender.com/api/events

**GitHub Repository:**

https://github.com/vinay7376/causalfunnel-analytics-dashboard

---

## Features

### Event Tracking

* Track page view events
* Track click events
* Generate and persist session IDs using localStorage
* Capture page URL and timestamp
* Capture click coordinates (X, Y)
* Send event data to backend APIs

### Backend APIs

* Store user interaction events
* Fetch all tracked events
* Fetch sessions with event counts
* Retrieve user journey for a specific session
* Provide click data for heatmap visualization

### Analytics Dashboard

* Session Overview
* User Journey Timeline
* Heatmap Analysis
* Analytics Summary Cards
* Event Analytics Charts
* Real-Time User Activity Insights

---

## Tech Stack

### Frontend

* React.js
* Axios
* Recharts
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Architecture

```text
Demo Webpage
      │
      ▼
 Tracker Script
      │
      ▼
 Node.js + Express APIs
      │
      ▼
 MongoDB Atlas
      │
      ▼
 React Analytics Dashboard
```

---

## Project Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── SessionTable.jsx
│   │   ├── SessionJourney.jsx
│   │   ├── Heatmap.jsx
│   │   └── AnalyticsChart.jsx
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   └── index.css
│
backend/
│
├── config/
├── controllers/
├── models/
├── routes/
└── server.js
│
tracker/
└── tracker.js
```

---

## API Endpoints

### Create Event

```http
POST /api/events
```

### Get All Events

```http
GET /api/events
```

### Get Sessions

```http
GET /api/events/sessions
```

### Get Session Events

```http
GET /api/events/session/:sessionId
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/vinay7376/causalfunnel-analytics-dashboard.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Screenshots

### Dashboard Overview

![Dashboard Overview](screenshots/dashboard-overview.png)

### Session Tracking & User Journey

![Session Tracking](screenshots/session-tracking.png)

### Heatmap Analysis

![Heatmap Analysis](screenshots/heatmap-analysis.png)

### Demo Tracking Page

![Demo Page](screenshots/demo-page.png)

---

## Assumptions & Trade-offs

* Session IDs are stored in localStorage for simplicity.
* Heatmap visualization is implemented using click coordinate plotting.
* Focus was placed on clean architecture, readability, and assignment requirements.
* The application is designed for demonstration purposes and can be extended for production-scale analytics.

---

## Future Improvements

* WebSocket-based real-time updates
* Advanced heatmap rendering
* User segmentation and filtering
* Session replay functionality
* Authentication and role-based access control
* Multi-page analytics support

---

## Author

**Vinay Pal**

B.Tech Computer Science & Engineering
United College of Engineering & Research, Prayagraj

Built for the **CausalFunnel Full Stack Engineer Assignment**.
