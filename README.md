# Geometrien-Verwaltung

**Programm starten:**

- > npm install
- > node index

**Tests starten:**

- > npm run test

---

### Aufgabe:

Schreibe eine Anwendung in einer Programmiersprache deiner Wahl.

Die Anwendung soll geometrische Objekte (im Folgenden Geometrien genannt) verwalten.
Folgende Typen von Geometrien sollen unterstützt werden: Punkte, Linien und Polygone.

### Regeln:

- Jede Geometrie besteht aus räumlichen Koordinaten.
- Eine Koordinatenpaar, hier auch als Punkt bezeichnet, besteht aus einer X und einer Y Koordinate.
- Eine Linie besteht aus mehrere Koordinatenpaaren. Die Anwendung soll Linien mit minimal 2 und maximal 10 Koordinatenpaaren unterstützen.
- Ein Polygon besteht ebenfalls aus Koordinatenpaaren. Die Anwendung soll Polygone bestehend aus minimal 3 und maximal 20 Koordinatenpaaren unterstützen.

### Funktionalität:

- der Nutzer kann neue Geometrien anlegen. Bei jedem neuen Anlegen hat er die Wahl, ob er einen Punkt, einer Linie oder ein Polygon anlegen möchte
- der Nutzer kann sich alle bereits angelegten Punkte als Liste ansehen. Die Liste muss nach den jeweils ersten Koordinaten des X-Wertes sortiert werden. Zum Beispiel:
  Es gibt folgende Punkte: point(5,2), point(2,7), point(1,7)
  Sortierte Ausgabe: point(1,7), point(2,7), point(5,2)
- der Nutzer kann sich alle angelegten Linien als Liste ausgeben lassen. Die Liste muss nach den Koordinaten sortiert werden.
- der Nutzer kann sich alle angelegten Polygone als Liste ausgeben lassen. Die Liste muss nach den Koordinaten sortiert werden
- Bonus: der Nutzer kann eine Geometrie löschen

### Technische Anforderungen:

- die Programmiersprache ist frei wählbar.
- Frameworks sind optional.
- die Geometrien werden im dynamischen Memory (als Array/List/Stack...) gespeichert
- User Interface (UI) ist die Kommandozeile: der Nutzer verwendet bestimmte Befehle in der Kommandozeile, um die neuen Geometrien anzulegen oder eine Liste der Geometrien zu bekommen
- Bonus: Jede Klasse (ausser Data-Klassen) hat einen Unit Test

### Ablauf

1. Der Nutzer startet die Anwendung und sieht nach dem Start eine Auflistung der vorhandenen Befehle:

### Beispiel:

---

Willkommen bei der Geometrien-Verwaltung!

---

Sie können folgende Befehle verwenden:  
 1.eine Geometrie hinzufügen: insert-geom  
 2.eine Geometrie löschen: delete-geom  
 3.eine Liste von den Punkten anzeigen: points-list  
 4.eine Liste von den Punkten anzeigen: lines-list  
 5.eine Liste von den Punkten anzeigen: polygons-list

---

2. Der Nutzer gibt den Befehl insert-geom ein. Die Anwendung fragt, was für eine Geometrie er anlegen möchte. Der Nutzer wählt den Geometrie-Typ und gibt die Koordinaten ein.

### Beispiele:

> insert-geom
> Bitte wählen Sie den Geometrie-Type: 1.Punkt 2.Linie 3.Polygon
> 1
> Bitte geben Sie die Koordinaten des Punktes ein und bestätigen Sie mit der Eingabe-Taste.
> 1,2
> Gespeichert!

> insert-geom
> Bitte wählen Sie den Geometrie-Type: 1.Punkt 2.Linie 3.Polygon
> 2
> Bitte geben Sie die Koordinaten der Linie ein und bestätigen Sie mit der Eingabe-Taste.
> 1,2
> Fehler! Eine Linie muss mindestens zwei Koordinatenpaare haben. Bitte versuchen Sie es noch mal.
> 1,2; 2,4; 5,11; 2,2; 5,4; 5,14; 10,20; 20,40; 50,110; 16,6; 24,44; 56,11
> Fehler! Eine Linie darf maximal 10 Koordinatenpaare haben. Bitte versuchen Sie es noch mal.
> 1,2; 2,4; 5,11; 2,2; 5,4; 5,14;
> Gespeichert!

> insert-geom
> Bitte wählen Sie das Geometrie-Type: 1. Punkt 2.Linie 3.Polygon
> 3
> Bitte geben Sie die Koordinaten des Polygons ein und bestätigen Sie mit der Eingabe-Taste.
> 1,2
> Fehler! Ein Polygon muss mindestens drei Koordinatenpaare haben. Bitte versuchen Sie es noch mal.
> 1,2; 2,4; 5,11; 2,2; 5,4; 5,14; 10,20; 20,40; 50,110; 16,6; 24,44; 56,11; 17,27; 27,47; 57,7; 7,9; 0,0; 5,5; 12,16; 33,11; 20,21; 30,7;
> Fehler! Ein Polygon darf maximal 20 Koordinatenpaare haben. Bitte versuchen Sie es noch mal.
> 1,2; 2,4; 5,11; 2,2; 5,4; 5,14;
> Gespeichert!

> points-list
> Folgende Punkte wurden bis jetzt erstellt:

|id | Koordinaten

|1 | 1,2
|2 | 2,4
|3 | 5,7

> lines-list
> Folgende Linien wurden bis jetzt erstellt:

|id | Koordinaten

|1 | 1,2; 3,4
|2 | 2,4; 5,6; 7,8
|3 | 5,7; 5,5; 7,7; 8,2

> polygons-list
> Folgende Polygone wurden bis jetzt erstellt:

|id | Koordinaten

|1 | 1,2; 3,4; 4,5;
|2 | 2,4; 5,6; 7,8;
|3 | 5,7; 5,5; 7,7; 8,2

> delete-geom
> Bitte wählen Sie den Geometrie-Type: 1. Punkt 2.Linie 3.Polygon, der gelöscht werden soll
> 1
> Bitte geben Sie die ID von dem Punk, der gelöscht werden soll ein
> 100
> Fehler! Es gibt keinen Punkt mit dem ID = 100. Bitte versuchen Sie es noch mal.
> 1
> Der Punkt mit der ID=1 wurde gelöscht!
