import Empire from "../Assets/Models/Empire.js";

let tie = new Empire()

export default class GameService {

  fire(hits) {
    tie.health -= hits
    console.log(tie.health)
  }


}