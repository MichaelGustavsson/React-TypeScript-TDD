import { useState, useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { IMediaDetails } from '../Models/IMediaDetails';
import MediaDetails from '../Components/MediaDetails';
import { get } from '../Utilities/HttpClient';
import { MediaDetailResponse } from '../Models/MediaDetailResponse';

export const TVShowPage = () => {
  const [show, setShow] = useState<IMediaDetails>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getShow = async () => {
      // const found = await FindMedia(`/shows/${id}`);
      const url = import.meta.env.VITE_BASE_URL + '/shows/' + id;
      const response = await get<MediaDetailResponse>(url);

      const media = response.result;
      media.mediaType = 'shows';

      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${media.backgroundImage}`
      );
      setPoster(`https://image.tmdb.org/t/p/w500${media.posterImage}`);
      setShow(media);
    };
    getShow();
  }, [id]);

  let content: ReactNode;

  if (show) {
    content = (
      <MediaDetails
        media={show!}
        backgroundImage={backgroundImage}
        posterImage={poster}
      />
    );
  } else {
    content = <h2>Hittade inget!</h2>;
  }

  return <>{content}</>;
};
