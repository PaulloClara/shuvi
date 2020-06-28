const { join: resolvePath } = require("path");
const { app, BrowserWindow } = require("electron");

const windows = {};
const isDevMode = process.env.NODE_ENV === "development";

class AppWindow extends BrowserWindow {
  constructor() {
    super({
      width: isDevMode ? 800 : 480,
      height: 720,
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.loadFile(resolvePath(__dirname, "views", "index.html"));

    if (isDevMode) this.webContents.openDevTools();
  }
}

app.on("ready", () => {
  windows.main = new AppWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
