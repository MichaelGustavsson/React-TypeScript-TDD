import { useState, useEffect } from 'react';
import { LoadMovies } from '../Utilities/LoadMovies';
import ItemsList from '../Components/ItemsList';
import { IMedia } from '../Models/IMedia';
import Search from '../Components/UI/Search';
import Pagination from '../Components/UI/Pagination';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMedia[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async (searchCritera?: string, page: number = 1) => {
    let result = [];
    const mediaList: IMedia[] = [];

    if (searchCritera) {
      result = await LoadMovies(`/movies?query=${searchCritera}&page=${page}`);
    } else {
      result = await LoadMovies(`/movies?page=${page}`);
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

  const handlePagination = async (page: number) => {
    loadMovies(undefined, page);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <h1 className='page-title'>Populära Filmer</h1>
      <Pagination gotoPage={handlePagination} pagination={} />
      {/* <Pagination gotoPage={handlePagination} pagination={pagination}/> */}
      <ItemsList items={movies} />
    </>
  );
};
