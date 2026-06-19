const express = require("express");

const router = express.Router();

const {
  createEvent,
  getEvents,
  getSessions,
  getSessionEvents,
  getHeatmapData,
} = require("../controllers/eventController");

router.post("/", createEvent);

router.get("/", getEvents);

router.get("/sessions", getSessions);

router.get("/session/:sessionId", getSessionEvents);

router.get("/heatmap/:page", getHeatmapData);

module.exports = router;