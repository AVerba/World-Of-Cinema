import styles from './MovieList.module.css';
import propTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(item => (
        <MovieItem key={item.id} movie={item} />
      ))}
    </ul>
  );
};
// MovieList.propTypes = {
//   movies: propTypes.arrayOf(
//     propTypes.shape({
//       item: propTypes.object.isRequired,
//     })
//   ),
// };
