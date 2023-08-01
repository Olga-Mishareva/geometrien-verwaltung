const Point = require("./Point.js");

describe("test functions of class Point", () => {
  it("convert coordinates of point from string to array", () => {
    const point = new Point("3,5");
    expect(point._handleCoords()).toEqual([3, 5]);
  });

  it("check validation of point if these is one only coordinate pair", () => {
    const point = new Point("5,6");
    expect(point.validatePoint()).toEqual([5, 6]);
  });

  it("check validation of point if these are more than one coordinate pair", () => {
    const point = new Point("5,6; 4,6");
    expect(point.validatePoint()).toBeUndefined();
  });
});
