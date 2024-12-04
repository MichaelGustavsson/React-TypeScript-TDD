import MediaList from '../Components/MediaList';
export const TVShowsPage = () => {
  return (
    <>
      <h1 className='page-title'>Populära Serier</h1>
      <MediaList mediaType={'shows'} />
    </>
  );
};
