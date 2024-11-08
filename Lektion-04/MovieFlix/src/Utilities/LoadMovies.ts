import axios from 'axios';

export const LoadMovies = async () => {
  const result = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=c225640b9109317dc84c9f661f0ca0ba&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  );

  return result.data.results;
};
