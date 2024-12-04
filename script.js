document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("video-frame");

  // Log message if blocked
  iframe.onerror = () => {
    console.log("The video iframe was blocked by an ad blocker.");
  };
});
