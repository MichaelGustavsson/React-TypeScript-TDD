import { IMediaDetails } from '../Models/IMediaDetails';

type DetailsProp = {
  media: IMediaDetails;
  backgroundImage: string;
  posterImage: string;
};

const MediaDetails = ({ media, backgroundImage, posterImage }: DetailsProp) => {
  return (
    <>
      <img className='overlay' src={backgroundImage} alt={media?.title} />

      <section className='details'>
        <div>
          <img src={posterImage} alt={media?.title} />
        </div>
        <div className='details-info'>
          <h2>{media?.title}</h2>
          <p>
            <i className='fas fa-star rating'></i> {media?.grade.toFixed(1)} /
            10
          </p>
          <p className='text-muted'>Premiär: {media?.releaseDate}</p>
          <p>{media?.overview}</p>
        </div>
      </section>
    </>
  );
};
export default MediaDetails;
