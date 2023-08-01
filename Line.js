const Geom = require("./Geom.js");
const commands = require("./helpers/constants.js");

class Line extends Geom {
  constructor(coordsString) {
    super(coordsString);
  }

  validateLine() {
    const newLine = this._handleCoords();
    if (newLine.length < 2) {
      console.log(
        `Fehler! Eine Linie muss mindestens zwei Koordinatenpaare haben. Bitte versuchen Sie es noch mal.\n${commands}`
      );
    } else if (newLine.length > 10) {
      console.log(
        `Fehler! Eine Linie darf maximal 10 Koordinatenpaare haben. Bitte versuchen Sie es noch mal.\n${commands}`
      );
    } else {
      return newLine;
    }
  }
}

module.exports = Line;
