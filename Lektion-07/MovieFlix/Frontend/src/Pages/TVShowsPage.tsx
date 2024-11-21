import { useState, useEffect } from 'react';
import { IMedia } from '../Models/IMedia';
import { LoadShows } from '../Utilities/LoadShows';
import ItemsList from '../Components/ItemsList';
import Search from '../Components/UI/Search';

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IMedia[]>([]);

  useEffect(() => {
    loadShows();
  }, []);

  const loadShows = async (searchCriteria?: string) => {
    let result = [];
    const mediaList: IMedia[] = [];

    if (searchCriteria) {
      result = await LoadShows(`/shows?query=${searchCriteria}`);
    } else {
      result = await LoadShows('/shows');
    }

    result.map((item) => {
      const { id, title, posterImage, releaseDate }: IMedia = item;
      const media: IMedia = {
        id,
        title,
        posterImage,
        releaseDate,
        mediaType: 'show',
      };
      mediaList.push(media);
    });

    setShows(mediaList);
  };

  const handleSearch = async (criteria: string) => {
    loadShows(criteria);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <h1 className='page-title'>Populära Serier</h1>
      <ItemsList items={shows} />
    </>
  );
};
