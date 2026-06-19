# CausalFunnel Analytics Dashboard

## Overview

A full-stack user analytics application built as part of the CausalFunnel Full Stack Engineer assignment.

The application tracks user interactions on a webpage, stores event data in MongoDB, and visualizes user behavior through an analytics dashboard.

Features include session tracking, user journey analysis, event analytics, and click heatmap visualization.

---

## Features

### Event Tracking

* Track page views
* Track click events
* Store session IDs using localStorage
* Capture page URL
* Capture timestamp
* Capture click coordinates (X, Y)
* Send events to backend API

### Backend APIs

* Store user events
* Fetch all events
* Fetch sessions with event counts
* Fetch events for a specific session
* Provide click data for heatmap visualization

### Analytics Dashboard

* Session Overview
* User Journey Timeline
* Heatmap Analysis
* Analytics Summary Cards
* Real-Time Dashboard Updates
* Click Event Visualization

---

## Tech Stack

### Frontend

* React.js
* Axios
* Recharts
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

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
├── models/
├── routes/
├── controllers/
├── config/
└── server.js
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
git clone <repository-url>
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Screenshots

### Dashboard

* Analytics Overview
* Session Tracking
* User Journey Timeline
* Heatmap Analysis

(Add screenshots here)

---

## Assumptions & Trade-offs

* Session IDs are stored in localStorage.
* Heatmap is implemented using click coordinate visualization.
* Real-time updates are simulated through periodic dashboard refresh.
* Focus was placed on simplicity, readability, and assignment requirements.

---

## Future Improvements

* Real-time WebSocket updates
* Advanced Heatmap Rendering
* User Segmentation
* Session Replay
* Authentication & User Management

---

## Author

Vinay Pal

B.Tech Computer Science & Engineering

United College of Engineering & Research, Prayagraj

Built for the CausalFunnel Full Stack Engineer Assignment.
