import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMediaDetails } from '../Models/IMediaDetails';
import { FindMedia } from '../Utilities/FindMedia';
import MediaDetails from '../Components/MediaDetails';

export const TVShowPage = () => {
  const [show, setShow] = useState<IMediaDetails>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getShow = async () => {
      const found = await FindMedia(`/shows/${id}`);
      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${found.backgroundImage}`
      );
      setPoster(`https://image.tmdb.org/t/p/w500${found.posterImage}`);
      setShow(found);
    };
    getShow();
  }, [id]);

  return (
    <>
      <MediaDetails
        media={show!}
        backgroundImage={backgroundImage}
        posterImage={poster}
      />
    </>
  );
};
