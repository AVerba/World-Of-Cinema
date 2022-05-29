import styles from './MovieList.module.css';
import propTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(item => (
        <MovieItem movie={item} />
      ))}
    </ul>
  );
};
