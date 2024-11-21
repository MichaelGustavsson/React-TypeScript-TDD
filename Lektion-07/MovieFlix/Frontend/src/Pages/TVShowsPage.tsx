import { useState, useEffect } from 'react';
import { IMedia } from '../Models/IMedia';
import { LoadShows } from '../Utilities/LoadShows';
import ItemsList from '../Components/ItemsList';

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IMedia[]>([]);

  useEffect(() => {
    loadShows();
  }, []);

  const loadShows = async () => {
    let result = [];
    const mediaList: IMedia[] = [];

    result = await LoadShows('/shows');

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

  return (
    <>
      <h1 className='page-title'>Populära Serier</h1>
      <ItemsList items={shows} />
    </>
  );
};
