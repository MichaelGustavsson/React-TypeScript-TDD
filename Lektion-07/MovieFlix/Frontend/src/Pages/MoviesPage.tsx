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
    let result = [];
    const mediaList: IMedia[] = [];

    result = await LoadMovies('/movies');

    result.map((item) => {
      const { id, title, posterImage, releaseDate }: IMedia = item;
      const media: IMedia = {
        id,
        title,
        posterImage,
        releaseDate,
        mediaType: 'movie',
      };
      mediaList.push(media);
    });

    setMovies(mediaList);
  };

  return (
    <>
      <h1 className='page-title'>Populära Filmer</h1>
      <ItemsList items={movies} />
    </>
  );
};
