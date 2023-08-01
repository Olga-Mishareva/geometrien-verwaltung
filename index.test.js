const { filterGeoms, sortPoints, sortGeoms } = require("./index.js");

describe("test add new geom", () => {
  it("test add new point to points array", () => {
    let points = [[7, 8]];
    const newPoint = [3, 5];
    points.push(newPoint);
    expect(points).toEqual([
      [7, 8],
      [3, 5],
    ]);
  });
  it("test add new line to lines array", () => {
    let lines = [
      [
        [7, 8],
        [3, 4],
      ],
    ];
    const newLine = [
      [3, 5],
      [-2, 45],
    ];
    lines.push(newLine);
    expect(lines).toEqual([
      [
        [7, 8],
        [3, 4],
      ],
      [
        [3, 5],
        [-2, 45],
      ],
    ]);
  });
  it("test add new polygon to poligons array", () => {
    let polygons = [];
    const newPolygon = [
      [3, 5],
      [-2, 45],
      [23, 7],
    ];
    polygons.push(newPolygon);
    expect(polygons).toEqual([
      [
        [3, 5],
        [-2, 45],
        [23, 7],
      ],
    ]);
  });
});

describe("test filter geoms with id for deleting", () => {
  it("test filter geoms if id < 1", () => {
    expect(
      filterGeoms(
        [
          [2, 3],
          [7, 4],
        ],
        "0"
      )
    ).toBeUndefined();
  });

  it("test filter geoms if id > geoms.length", () => {
    expect(
      filterGeoms(
        [
          [2, 3],
          [7, 4],
        ],
        "3"
      )
    ).toBeUndefined();
  });

  it("test filter points", () => {
    expect(
      filterGeoms(
        [
          [2, 3],
          [7, 4],
        ],
        "2"
      )
    ).toEqual([[2, 3]]);
  });

  it("test filter geoms", () => {
    expect(
      filterGeoms(
        [
          [
            [2, 3],
            [7, 4],
          ],
          [
            [6, 2],
            [9, 1],
          ],
          [
            [2, 3],
            [7, 4],
          ],
        ],
        "2"
      )
    ).toEqual([
      [
        [2, 3],
        [7, 4],
      ],
      [
        [2, 3],
        [7, 4],
      ],
    ]);
  });
});

describe("test sort points for a point-list", () => {
  it("sort point", () => {
    expect(
      sortPoints([
        [17, 45],
        [7, 4],
        [1, 23],
        [-2, 3],
        [0, 8],
      ])
    ).toEqual([
      [-2, 3],
      [0, 8],
      [1, 23],
      [7, 4],
      [17, 45],
    ]);
  });
});

describe("test sort geoms for a lines-list and polygons-list", () => {
  it("sort geoms", () => {
    expect(
      sortGeoms([
        [
          [17, 45],
          [7, 4],
          [1, 23],
          [-2, 3],
          [0, 8],
        ],
        [
          [27, 45],
          [5, 4],
          [8, 23],
          [-3, 3],
          [0, 8],
        ],
      ])
    ).toEqual([
      [
        [-2, 3],
        [0, 8],
        [1, 23],
        [7, 4],
        [17, 45],
      ],
      [
        [-3, 3],
        [0, 8],
        [5, 4],
        [8, 23],
        [27, 45],
      ],
    ]);
  });
});
