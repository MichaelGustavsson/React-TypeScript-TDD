import { useState, useEffect } from 'react';
import { LoadMovies } from '../Utilities/LoadMovies';
import ItemsList from '../Components/ItemsList';
import { IMedia } from '../Models/IMedia';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMedia[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setMovies(await LoadMovies('/movies'));
  };

  return (
    <>
      {/* <Title title='' size='' */}
      <h1 className='page-title'>Populära Filmer</h1>
      <ItemsList items={movies} />
    </>
  );
};
