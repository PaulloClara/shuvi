const { join: resolvePath } = require("path");
const { app, BrowserWindow } = require("electron");

const windows = {};

class AppWindow extends BrowserWindow {
  constructor() {
    super({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.loadFile(resolvePath(__dirname, "views", "index.html"));
  }
}

app.on("ready", () => {
  windows.main = new AppWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
