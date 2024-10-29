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
