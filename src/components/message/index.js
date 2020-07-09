globalThis.utils.createStyleLink("message");

customElements.define(
  "wc-message",
  class message extends HTMLParagraphElement {
    constructor() {
      super();

      if (!this.hasAttribute("is")) this.setAttribute("is", "wc-message");
    }

    add(message = "") {
      this.textContent = message;
    }

    set(owner = "") {
      this.classList.add(owner);
    }
  },
  { extends: "p" }
);
