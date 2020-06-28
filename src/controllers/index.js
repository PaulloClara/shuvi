class Controller {
  constructor() {
    this.userInput = "";
  }

  handleSendMessage(evt, el) {
    evt.preventDefault();

    const input = el[0];
    const button = el[1];

    this.userInput = input.value;
  }
}

const controller = new Controller();
