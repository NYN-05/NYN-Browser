const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("url");
  const goButton = document.getElementById("goButton");
  const backButton = document.getElementById("back");
  const forwardButton = document.getElementById("forward");

  function loadURL() {
    let url = urlInput.value.trim();
    if (!url) return;

    if (!url.includes(".") || url.includes(" ")) {
      url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
    } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    console.log("Opening URL:", url);
    ipcRenderer.send("load-url", url); // 🔹 Send to main process
  }

  goButton.addEventListener("click", loadURL);
  urlInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      loadURL();
    }
  });

  backButton.addEventListener("click", () => ipcRenderer.send("go-back"));
  forwardButton.addEventListener("click", () => ipcRenderer.send("go-forward"));
});
