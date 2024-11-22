import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindShow } from '../Utilities/FindShow';
import { IMediaDetails } from '../Models/IMediaDetails';

export const TVShowPage = () => {
  const [show, setShow] = useState<IMediaDetails>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getShow = async () => {
      const found = await FindShow(`/shows/${id}`);
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
      <img className='overlay' src={backgroundImage} alt={show?.title} />

      <section className='details'>
        <div>
          <img src={poster} alt={show?.title} />
        </div>
        <div className='details-info'>
          <h2>{show?.title}</h2>
          <p>
            <i className='fas fa-star rating'></i> {show?.grade.toFixed(1)} / 10
          </p>
          <p className='text-muted'>Premiär: {show?.releaseDate}</p>
          <p>{show?.overview}</p>
        </div>
      </section>
    </>
  );
};
