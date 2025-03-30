const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

// Handle URL navigation requests
ipcMain.on("load-url", (event, url) => {
  win.loadURL(url);
});

// Handle back/forward navigation
ipcMain.on("go-back", () => {
  if (win.webContents.canGoBack()) win.webContents.goBack();
});

ipcMain.on("go-forward", () => {
  if (win.webContents.canGoForward()) win.webContents.goForward();
});

app.whenReady().then(createWindow);
