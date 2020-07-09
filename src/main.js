const { join: resolvePath } = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

process.app = {};
process.windows = {};

process.app.srcPath = __dirname;
process.app.isDevMode = process.env.NODE_ENV === "development";
process.app.openDevTools =
  process.app.isDevMode || process.argv.includes("--dev-tools");

class AppWindow extends BrowserWindow {
  constructor() {
    super({
      width: process.app.openDevTools ? 800 : 480,
      height: 720,
      minWidth: 420,
      minHeight: 600,
      autoHideMenuBar: true,
      icon: resolvePath(process.app.srcPath, "assets", "profile.png"),
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.loadFile(resolvePath(process.app.srcPath, "views", "index.html"));

    if (process.app.openDevTools) this.webContents.openDevTools();
  }
}

app.on("ready", () => {
  process.windows.main = new AppWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("init", function(event) {
  event.returnValue = JSON.stringify(process.app);
});
