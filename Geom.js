class Geom {
  constructor(coordsString) {
    this._coordsString = coordsString;
  }

  _handleCoords() {
    this._coords = this._coordsString.split(";").map((item) => {
      const newItem = item
        .trim()
        .split(",")
        .map((elem) => {
          return +elem;
        });
      return newItem;
    });

    return this._coords;
  }
}

module.exports = Geom;
