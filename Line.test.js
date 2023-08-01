const Line = require("./Line.js");

describe("test functions of class Point", () => {
  it("check validation of line if these are less than two coordinate pairs", () => {
    const line = new Line("5,6");
    expect(line.validateLine()).toBeUndefined();
  });

  it("check validation of point if these are min two coordinate pairs", () => {
    const line = new Line("5,6; 4,3");
    expect(line.validateLine()).toEqual([
      [5, 6],
      [4, 3],
    ]);
  });

  it("check validation of point if these are max ten coordinate pairs", () => {
    const line = new Line("5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3; 5,6; 4,3");
    expect(line.validateLine()).toEqual([
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
    ]);
  });

  it("check validation of point if these are more than ten coordinate pairs", () => {
    const line = new Line(
      "5,6; 4,6; 34,5; 2,4; 5,6; 4,6; 34,5; 2,4; 5,6; 4,6; 34,5"
    );
    expect(line.validateLine()).toBeUndefined();
  });
});
