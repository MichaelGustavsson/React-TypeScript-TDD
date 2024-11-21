import { useState, useEffect } from 'react';
import { IShow } from '../Models/IShow';
import { LoadShows } from '../Utilities/LoadShows';
import ItemsList from '../Components/ItemsList';

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setShows(await LoadShows('/shows'));
  };

  return (
    <>
      <h1 className='page-title'>Populära Serier</h1>
      <ItemsList items={shows} />
    </>
  );
};
