/* 
  Union Types låter oss att använda alternativa datatyper föe EN variable...
  union operatorn är pipe teckent |
*/

// let modelYear: number;
let modelYear: number | string;

modelYear = 2020;
modelYear = 'Jan2020';
// modelYear = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 10, y: 20 };
coordinates = { long: 100.45, lat: 246.9 };

/* Funktion som tar in en union av typer */
const displayModelYear = (modelYear: number | string) => {
  console.log(`Årsmodell ${modelYear}`);
};

displayModelYear(2020);
displayModelYear('Nov2011');
displayModelYear(new Date('2020-10-01').getFullYear());
// displayModelYear(true);

/* Listor/Arrayer */
const coords: (Point | Loc)[] = [];
coords.push({ x: 10, y: 20 });
coords.push({ lat: 200, long: 100 });

/* Literals och union types */
let movieTypes: 'Action' | 'Drama' | 'Horror';

movieTypes = 'Action';
// movieTypes = 'Comedy';
