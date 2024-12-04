import { ReactNode } from 'react';
import { IMediaDetails } from '../Models/IMediaDetails';

type DetailsProp = {
  media: IMediaDetails;
  backgroundImage: string;
  posterImage: string;
};

const MediaDetails = ({ media, backgroundImage, posterImage }: DetailsProp) => {
  let genres: ReactNode;
  let runtime: ReactNode;
  let poster: ReactNode;

  if (media.genre) {
    genres = media.genre.map((genre) => (
      <span key={genre.id}>{genre.name} </span>
    ));
  }

  if (media.mediaType === 'movies') {
    runtime = (
      <span>
        Spellängd: {Math.floor(media.runtime / 60)} tim {media.runtime % 60} min
      </span>
    );
  } else {
    runtime = <span>Avsnitt: {media.runtime} st</span>;
  }

  if (!posterImage.endsWith('null')) {
    poster = <img src={posterImage} alt={media.title} />;
  } else {
    poster = <img src='../assets/images/No-Image.jpg' alt={media.title} />;
  }

  return (
    <>
      <img className='overlay' src={backgroundImage} alt={media?.title} />

      <section className='details'>
        <div>{poster}</div>
        <div className='details-info'>
          <h2>{media?.title}</h2>
          <p>
            <i className='fas fa-star rating'></i> {media?.grade.toFixed(1)} /
            10
          </p>
          <p className='text-muted'>Premiär: {media?.releaseDate}</p>
          <p>{media?.overview}</p>
          <div className='genre'>
            <span>Genre: </span>
            {genres}
          </div>
          <div>{runtime}</div>
        </div>
      </section>
    </>
  );
};
export default MediaDetails;
