import { IMovie } from '../Models/IMovie';
import { IShow } from '../Models/IShow';

type ItemListProps = {
  items: IMovie[] | IShow[];
};

const ItemsList = ({ items }: ItemListProps) => {
  return (
    <section className='grid'>
      {/* {movies.map((movie) => (
        <section className='card' key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </NavLink>
          <div className='card-body'>
            <h5>{movie.title}</h5>
            <small className='text-muted'>{movie.release_date}</small>
          </div>
        </section>
      ))} */}
    </section>
  );
};
export default ItemsList;
