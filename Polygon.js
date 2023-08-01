const Geom = require("./Geom.js");
const commands = require("./helpers/constants.js");

class Polygon extends Geom {
  constructor(coordsString) {
    super(coordsString);
  }

  validatePolygon() {
    const newPolygon = this._handleCoords();
    if (newPolygon.length < 3) {
      console.log(
        `Fehler! Ein Polygon muss mindestens drei Koordinatenpaare haben. Bitte versuchen Sie es noch mal.\n${commands}`
      );
    } else if (newPolygon.length > 20) {
      console.log(
        `Fehler! Ein Polygon darf maximal 20 Koordinatenpaare haben. Bitte versuchen Sie es noch mal.\n${commands}`
      );
    } else {
      return newPolygon;
    }
  }
}

module.exports = Polygon;
