const Geom = require("./Geom.js");

describe("test function of class Geom", () => {
  it("convert coordinates of many pointes from string to array of arrays", () => {
    const geom = new Geom("6,5; 2,3; 16,34");
    expect(geom._handleCoords()).toEqual([
      [6, 5],
      [2, 3],
      [16, 34],
    ]);
  });
});
