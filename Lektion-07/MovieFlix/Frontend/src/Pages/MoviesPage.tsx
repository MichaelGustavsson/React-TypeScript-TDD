import { useState, useEffect } from 'react';
import { LoadMovies } from '../Utilities/LoadMovies';
import ItemsList from '../Components/ItemsList';
import { IMedia } from '../Models/IMedia';
import Search from '../Components/UI/Search';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMedia[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async (searchCritera?: string) => {
    let result = [];
    const mediaList: IMedia[] = [];

    if (searchCritera) {
      result = await LoadMovies(`/movies?query=${searchCritera}`);
    } else {
      result = await LoadMovies('/movies');
    }

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

  const handleSearch = async (criteria: string) => {
    loadMovies(criteria);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <h1 className='page-title'>Populära Filmer</h1>
      <ItemsList items={movies} />
    </>
  );
};
