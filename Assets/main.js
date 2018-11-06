import GameController from "../components/gameController.js";

class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

// @ts-ignore
window.app = new App()