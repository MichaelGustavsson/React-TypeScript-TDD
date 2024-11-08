import { IMovie } from '../Models/IMovie';
import { Item } from './Item';

import styles from './gridlist.module.css';

export const GridList = ({ movies }: { movies: IMovie[] }) => {
  return (
    <section className={styles.grid}>
      {movies.map((movie: IMovie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
