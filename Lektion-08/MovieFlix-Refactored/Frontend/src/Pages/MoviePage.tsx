import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMediaDetails } from '../Models/IMediaDetails';
import { FindMedia } from '../Utilities/FindMedia';
import MediaDetails from '../Components/MediaDetails';

export const MoviePage = () => {
  const [movie, setMovie] = useState<IMediaDetails>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const found = await FindMedia(`/movies/${id}`);
      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${found.backgroundImage}`
      );
      setPoster(`https://image.tmdb.org/t/p/w500${found.posterImage}`);
      setMovie(found);
    };
    getMovie();
  }, [id]);

  return (
    <>
      <MediaDetails
        media={movie!}
        backgroundImage={backgroundImage}
        posterImage={poster}
      />
    </>
  );
};
