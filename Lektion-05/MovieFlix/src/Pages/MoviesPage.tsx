import { useState, useEffect } from 'react';
import { IMovie } from '../Models/IMovie';
import { LoadMovies } from '../Utilities/LoadMovies';
import ItemsList from '../Components/ItemsList';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setMovies(await LoadMovies('discover/movie'));
  };

  return (
    <>
      <h1 className='page-title'>Populära Filmer</h1>
      <ItemsList items={movies} />
    </>
  );
};
