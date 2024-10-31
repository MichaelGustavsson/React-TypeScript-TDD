// Skapa egna datatyper...
type Movie = {
  title: string;
  releaseYear: number;
  director: string;
  length: number;
};

const halloween: Movie = {
  title: 'Halloween',
  releaseYear: 1980,
  director: 'Kalle Kula',
  length: 90,
};

// Kan använda type som argument till en funktion...
const displayMovieInfo = (movie: Movie) => {};

displayMovieInfo(halloween);
// displayMovieInfo("Kalle Anka och hans vänner")

/* Intersection Types */
type Vehicle = {
  readonly id: number;
  regNo: string;
};

// readonly egenskaper kan endast sättas i initieringsfasen.
// det vill säga i konstruktorn(constructor)
const kia: Vehicle = {
  id: 1,
  regNo: 'ABC123',
};

// kia.id = 2;
kia.regNo = 'DEF456';

// Ny typ som hanterar färg...
type Car = {
  color: string;
};

// const volvo: Car = {
//   color: 'Black',
// };

type SuperCar = Vehicle & Car;

const porsche: SuperCar = {
  id: 3,
  regNo: 'KLM111',
  color: 'White',
};

type GearType = {
  numberOfGear: number;
  gearType: string;
};

// type SuperDuperCar = Vehicle & Car & GearType;
type SuperDuperCar = SuperCar & GearType;

const ferrari: SuperDuperCar = {
  id: 4,
  regNo: 'PQR789',
  color: 'Red',
  gearType: 'Paddle',
  numberOfGear: 8,
};

// Dynamiskt addera egenskaper till en befintlig typ...
// type RacingCar = Vehicle & Car & GearType & { horsePower: number };
type RacingCar = SuperDuperCar & { horsePower: number };

const koenigsegg: RacingCar = {
  id: 4,
  regNo: 'PQR789',
  color: 'Yellow',
  gearType: 'StepTronic',
  numberOfGear: 12,
  horsePower: 1100,
};
