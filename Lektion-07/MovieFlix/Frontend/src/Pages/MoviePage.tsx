import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindMovie } from '../Utilities/FindMovie';
import { IMovie } from '../Models/IMovie';

export const MoviePage = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const found = await FindMovie(`/movies/${id}`);
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
      <img className='overlay' src={backgroundImage} alt={movie?.title} />

      <section className='details'>
        <div>
          <img src={poster} alt={movie?.title} />
        </div>
        <div className='details-info'>
          <h2>{movie?.title}</h2>
          <p>
            <i className='fas fa-star rating'></i> {movie?.grade.toFixed(1)} /
            10
          </p>
          <p className='text-muted'>Premiär: {movie?.releaseDate}</p>
          <p>{movie?.overview}</p>
        </div>
      </section>
    </>
  );
};
