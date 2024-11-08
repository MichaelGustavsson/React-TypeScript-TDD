import { useState, useEffect } from 'react';
import { IMovie } from '../Models/IMovie';
import { LoadMovies } from '../Utilities/LoadMovies';
import { GridList } from '../Components/GridList';
import { Header } from '../Components/Header';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setMovies(await LoadMovies());
  };

  return (
    <>
      <Header title='Populära filmer' />
      <GridList movies={movies} />
    </>
  );
};
