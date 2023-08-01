const readline = require("node:readline");

const Point = require("./Point.js");
const Line = require("./Line.js");
const Polygon = require("./Polygon.js");
const commands = require("./helpers/constants.js");
const getCommands = require("./helpers/helpers.js");

let points = [];
let lines = [];
let polygons = [];

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ===========================================

function insertGeom(number) {
  if (+number === 1) {
    reader.question(
      "Bitte geben Sie die Koordinaten des Punktes ein und bestätigen Sie mit der Eingabe-Taste (z.B.: 3,7).\n",
      (coordsString) => {
        const point = new Point(coordsString);
        const newPoint = point.validatePoint();
        if (newPoint) {
          points.push(newPoint);
          console.log("Gespeichert!");
          getCommands();
        }
      }
    );
  } else if (+number === 2) {
    reader.question(
      "Bitte geben Sie die Koordinaten der Linie ein und bestätigen Sie mit der Eingabe-Taste (z.B.: 2,9; 21,5).\n",
      (coordsString) => {
        const line = new Line(coordsString);
        const newLine = line.validateLine();
        if (newLine) {
          lines.push(newLine);
          console.log("Gespeichert!");
          getCommands();
        }
      }
    );
  } else if (+number === 3) {
    reader.question(
      "Bitte geben Sie die Koordinaten des Polygons ein und bestätigen Sie mit der Eingabe-Taste (z.B.: 17,6; 5,4; 2,23).\n",
      (coordsString) => {
        const polygon = new Polygon(coordsString);
        const newPolygon = polygon.validatePolygon();
        if (newPolygon) {
          polygons.push(newPolygon);
          console.log("Gespeichert!");
          getCommands();
        }
      }
    );
  } else {
    console.log(
      `Fehler! Es gibt keine ${number} Option. Bitte versuchen Sie es noch mal.\n${commands}`
    );
  }
}

function filterGeoms(geoms, id) {
  if (id > geoms.length || id < 1) {
    console.log(
      `Fehler! Es gibt keinen Punkt mit dem ID = ${id}. Bitte versuchen Sie es noch mal.`
    );
    return;
  }
  const filtredGeoms = geoms.filter((_, i) => i + 1 !== +id);
  return filtredGeoms;
}

function deleteGeom(number, id) {
  if (+number === 1) {
    points = filterGeoms(points, id);
    console.log(`Der Punkt mit der ID=${id} wurde gelöscht!`);
    getCommands();
  } else if (+number === 2) {
    lines = filterGeoms(lines, id);
    console.log(`Die Linie mit der ID=${id} wurde gelöscht!`);
    getCommands();
  } else if (+number === 3) {
    polygons = filterGeoms(polygons, id);
    console.log(`Das Polygon mit der ID=${id} wurde gelöscht!`);
    getCommands();
  } else {
    console.log(
      `Fehler! Es gibt keine ${number} Option. Bitte versuchen Sie es noch mal.\n${commands}`
    );
  }
}

function sortPoints(points) {
  const sortedPoints = points.sort((a, b) => a[0] - b[0]);
  return sortedPoints;
}

function sortGeoms(geoms) {
  geoms.forEach((geom) => {
    geom.sort((a, b) => a[0] - b[0]);
  });
  return geoms;
}

// ===========================================

console.log(
  `.........................................\nWillkommen bei der Geometrien-Verwaltung!\n${commands}`
);

reader.on("line", (input) => {
  switch (input) {
    case "insert-geom":
      reader.question(
        "Bitte wählen Sie den Geometrie-Type: 1.Punkt 2.Linie 3.Polygon\n",
        (number) => {
          console.log(`Ausgewählt: ${number}`);
          insertGeom(number);
        }
      );
      break;
    case "delete-geom":
      reader.question(
        "Bitte wählen Sie den Geometrie-Type: 1. Punkt 2.Linie 3.Polygon, der gelöscht werden soll.\n",
        (number) => {
          console.log(`Ausgewählt: ${number}`);
          reader.question(
            "Bitte geben Sie die ID von dem Punkt, der gelöscht werden soll ein.\n",
            (id) => {
              deleteGeom(number, id);
            }
          );
        }
      );
      break;
    case "points-list":
      const sortedPoints = sortPoints(points);
      console.log(
        `Folgende Punkte wurden bis jetzt erstellt:\n|id | Koordinaten\n--------------------\n${sortedPoints
          .map((point, i) => `|${i + 1}  | ${point}\n`)
          .join("")}`
      );
      getCommands();
      break;
    case "lines-list":
      const sortedLines = sortGeoms(lines);
      console.log(
        `Folgende Linien wurden bis jetzt erstellt:\n|id | Koordinaten\n--------------------\n${sortedLines
          .map((line, i) => `|${i + 1}  | ${line.join("; ")}\n`)
          .join("")}`
      );
      getCommands();
      break;
    case "polygons-list":
      const sortedPolygons = sortGeoms(polygons);
      console.log(
        `Folgende Polygone wurden bis jetzt erstellt:\n|id | Koordinaten\n--------------------\n${sortedPolygons
          .map((poligon, i) => `|${i + 1}  | ${poligon.join("; ")}\n`)
          .join("")}`
      );
      getCommands();
      break;
    case "exit":
      reader.close();
      break;
    default:
      console.log(
        `Fehler! Es gibt keinen ${input} Befehl. Bitte versuchen Sie es noch mal.\n${commands}`
      );
  }
});

module.exports = { insertGeom, filterGeoms, sortPoints, sortGeoms };
