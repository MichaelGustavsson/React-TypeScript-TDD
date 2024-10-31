/* Deklarering av variabler... */
// Explicit typ annotering...
let movieTitle: string;
let movieLength: number;

movieTitle = 'Halloween';
movieLength = 94;
// Går ej!!!
// movieLength = '94';

// Implicit/automatisk typning av variable...
let tv = 'La brea';
let episodes = 24;
// episodes = '24';
let isDrama = true;
let categories = [];
// categories = {};

// Om jag inte vet vad det är för typ som kommer att användas...
// any, se upp med datatypen any...
let director: any;
director = 'Jonathan Nolan';
director = 2024;
director = true;
director = [];
