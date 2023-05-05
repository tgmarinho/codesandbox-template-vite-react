import React, { useRef, useEffect } from "react";
import "./App.css";

function RestreamVideo() {
  const iframeRef = useRef(null);

  const checkFullscreenWorks = () => {
    alert("entrei");
    const elem = document.body;
    /* If fullscreen mode is available, show the element in fullscreen */
    if (
      document.fullscreenEnabled /* Standard syntax */ ||
      document.webkitFullscreenEnabled /* Safari */ ||
      document.msFullscreenEnabled /* IE11 */
    ) {
      /* Show the element in fullscreen */
      if (elem.requestFullscreen) {
        elem.requestFullscreen(); /* Standard syntax */
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    } else {
      alert("ops I cant");
    }
  };

  return (
    <div className="App">
      <iframe
        ref={iframeRef}
        src="https://example.com"
        title="Example iframe"
        style={{ width: "100%", height: "300px", border: "none" }}
      ></iframe>
      <button onClick={checkFullscreenWorks}>Toggle Fullscreen</button>
    </div>
  );
}

export default RestreamVideo;
