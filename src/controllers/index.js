class Controller {
  constructor() {
    this.$el = {};
    this.$state = {};

    this.$state.userInput = "";

    this.loadElements();
  }

  handleSendMessage(event) {
    event.preventDefault();

    const value = this.$el.form.input.value.trim();
    if (!value) return;

    this.$state.userInput = value;

    this.clearUserInput();
    this.addMessage({ owner: "user" });
  }

  handleUserInput() {
    if (this.$el.form.input.value.trim()) {
      this.$el.form.button.mic.classList.add("hidden");
      this.$el.form.button.send.classList.remove("hidden");
    } else {
      this.$el.form.button.mic.classList.remove("hidden");
      this.$el.form.button.send.classList.add("hidden");
    }
  }

  addMessage({ text = this.$state.userInput, owner }) {
    const wcMessage = document.createElement("p", { is: "wc-message" });

    wcMessage.add(text);
    wcMessage.set(owner);

    this.$el.messages.insertAdjacentElement("beforeend", wcMessage);
  }

  clearUserInput() {
    this.$el.form.input.value = "";
    this.handleUserInput();
  }

  loadElements() {
    this.$el.form = document.querySelector(".footerbar .form");
    const [input, emoji, send, mic] = this.$el.form;

    this.$el.form.input = input;
    this.$el.form.button = { emoji, send, mic };

    this.$el.messages = document.querySelector(".messages");

    document.body.classList.remove("hidden");
  }
}

const controller = new Controller();
