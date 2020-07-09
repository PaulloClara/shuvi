const { ipcRenderer } = require("electron");
process.app = JSON.parse(ipcRenderer.sendSync("init"));

globalThis.utils = {
  resolvePath: require("path").join,
  createStyleLink(name) {
    const styleLink = document.createElement("link");

    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute(
      "href",
      this.resolvePath(process.app.srcPath, "components", name, "styles.css")
    );

    document.head.appendChild(styleLink);
  }
};
