import { useState, useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { IMediaDetails } from '../Models/IMediaDetails';
import MediaDetails from '../Components/MediaDetails';
import { get } from '../Utilities/HttpClient';
import { MediaDetailResponse } from '../Models/MediaDetailResponse';

export const MoviePage = () => {
  const [movie, setMovie] = useState<IMediaDetails>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const url = import.meta.env.VITE_BASE_URL + '/movies/' + id;
      const response = await get<MediaDetailResponse>(url);

      const media = response.result;
      media.mediaType = 'movies';

      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${media.backgroundImage}`
      );

      setPoster(`https://image.tmdb.org/t/p/w500${media.posterImage}`);
      setMovie(media);
    };
    getMovie();
  }, [id]);

  let content: ReactNode;

  if (movie) {
    content = (
      <MediaDetails
        media={movie}
        backgroundImage={backgroundImage}
        posterImage={poster}
      />
    );
  } else {
    content = <h2>Hittade inget!</h2>;
  }

  return <>{content}</>;
};
