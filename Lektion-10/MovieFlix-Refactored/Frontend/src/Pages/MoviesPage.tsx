import MediaList from '../Components/MediaList';
export const MoviesPage = () => {
  return (
    <>
      <h1 className='page-title'>Populära Filmer</h1>
      <MediaList mediaType={'movies'} />
    </>
  );
};
