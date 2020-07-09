globalThis.utils.createStyleLink("icon");

customElements.define(
  "wc-icon",
  class Icon extends HTMLButtonElement {
    constructor() {
      super();

      this.$el = {};
      this.$attr = {};

      this.loadAttrs();
      this.loadImgElement();

      this.appendChild(this.$el.img);
    }

    loadAttrs() {
      this.$attr.name = this.getAttribute("name") || "arrow";
      this.$attr.class = this.getAttribute("class") || "";
      this.$attr.source =
        this.getAttribute("source") ||
        globalThis.utils.resolvePath(
          process.app.srcPath,
          "assets",
          `${this.$attr.name}.png`
        );
    }

    loadImgElement() {
      this.$el.img = document.createElement("img");

      this.$el.img.setAttribute("class", this.$attr.name);
      this.$el.img.setAttribute("src", this.$attr.source);
    }
  },
  { extends: "button" }
);
