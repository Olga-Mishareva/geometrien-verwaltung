const Polygon = require("./Polygon.js");

describe("test functions of class Point", () => {
  it("check validation of line if these are less than three coordinate pairs", () => {
    const polygon = new Polygon("5,6; 7,3");
    expect(polygon.validatePolygon()).toBeUndefined();
  });

  it("check validation of point if these are min three coordinate pairs", () => {
    const polygon = new Polygon("5,6; 4,3; 8,95");
    expect(polygon.validatePolygon()).toEqual([
      [5, 6],
      [4, 3],
      [8, 95],
    ]);
  });

  it("check validation of point if these are max twenty coordinate pairs", () => {
    const polygon = new Polygon(
      "5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 8,95; 5,6; 4,3; 8,95; 5,6; 4,3; 8,95; 5,6"
    );
    expect(polygon.validatePolygon()).toEqual([
      [5, 6],
      [4, 3],
      [5, 6],
      [4, 3],
      [5, 6],
      [4, 3],
      [5, 6],
      [4, 3],
      [5, 6],
      [4, 3],
      [5, 6],
      [4, 3],
      [8, 95],
      [5, 6],
      [4, 3],
      [8, 95],
      [5, 6],
      [4, 3],
      [8, 95],
      [5, 6],
    ]);
  });

  it("check validation of point if these are more than ten coordinate pairs", () => {
    const polygon = new Polygon(
      "5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 8,95; 5,6; 4,3; 8,95; 5,6; 4,3; 8,95; 5,6; 1,2"
    );
    expect(polygon.validatePolygon()).toBeUndefined();
  });
});
