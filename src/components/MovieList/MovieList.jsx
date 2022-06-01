import styles from './MovieList.module.css';
import propTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(item => (
        <MovieItem
          key={item.id}
          id={item.id}
          title={item.original_title}
          poster={item.poster_path}
        />
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      item: propTypes.object,
    })
  ),
};
