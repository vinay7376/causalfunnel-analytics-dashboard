(function () {

  if (window.__TRACKER_INITIALIZED__) {
    return;
  }

  window.__TRACKER_INITIALIZED__ = true;

  const sessionId =
    localStorage.getItem("sessionId") ||
    crypto.randomUUID();

  localStorage.setItem("sessionId", sessionId);

  const API_URL =
    "http://localhost:5000/api/events";

  async function sendEvent(eventData) {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error(error);
    }
  }

  sendEvent({
    sessionId,
    eventType: "page_view",
    pageUrl: window.location.pathname,
    timestamp: new Date(),
  });

  document.addEventListener("click", (e) => {
    sendEvent({
      sessionId,
      eventType: "click",
      pageUrl: window.location.pathname,
      timestamp: new Date(),
      x: e.clientX,
      y: e.clientY,
    });
  });

})();