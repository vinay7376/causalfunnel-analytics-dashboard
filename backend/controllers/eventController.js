const Event = require("../models/Event");

// POST /api/events
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET /api/events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ timestamp: -1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/events/sessions
const getSessions = async (req, res) => {
  try {
    const sessions = await Event.aggregate([
      {
        $group: {
          _id: "$sessionId",
          totalEvents: { $sum: 1 },
        },
      },
    ]);

    res.json(sessions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/events/session/:sessionId
const getSessionEvents = async (req, res) => {
  try {
    const events = await Event.find({
      sessionId: req.params.sessionId,
    }).sort({ timestamp: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/events/heatmap/:page
const getHeatmapData = async (req, res) => {
  try {
    const events = await Event.find({
      pageUrl: req.params.page,
      eventType: "click",
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getSessions,
  getSessionEvents,
  getHeatmapData,
};