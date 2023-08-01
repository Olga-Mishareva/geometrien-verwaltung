const Geom = require("./Geom.js");
const commands = require("./helpers/constants.js");

class Point extends Geom {
  constructor(coordsString) {
    super(coordsString);
  }

  _handleCoords() {
    this._coords = this._coordsString
      .trim()
      .split(",")
      .map((item) => {
        return +item;
      });
    return this._coords;
  }

  validatePoint() {
    const newPoint = this._handleCoords();
    console.log(newPoint);
    if (newPoint.length > 2) {
      console.log(
        `Fehler! Ein Punkt muss nur ein Koordinatenpaar haben. Bitte versuchen Sie es noch mal.\n${commands}`
      );
    } else {
      return newPoint;
    }
  }
}

module.exports = Point;
