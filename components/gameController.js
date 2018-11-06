import GameService from "./gameService.js";



let gs = new GameService()

export default class GameController {

  fire(hits) {
    gs.fire(hits)
  }
  missiles() {
    gs.fire(10)
  }
  photons() {
    gs.fire(5)
  }
}