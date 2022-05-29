import styles from './MovieItem.module.css';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import commonImage from '../../UI/commonImage.png';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, original_title } = movie;

  return (
    <li className={styles.item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <div className={styles.poster}>
          {poster_path !== null ? (
            <picture>
              <source
                srcSet={`https://themoviedb.org/t/p/w500${poster_path}`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`https://themoviedb.org/t/p/w342${poster_path}`}
                media="(min-width: 768px)"
              />
              <img
                alt={original_title}
                className={styles.itemImage}
                loading="lazy"
                src={`https://themoviedb.org/t/p/w342${poster_path}`}
              />
            </picture>
          ) : (
            <img
              className={styles.itemImage}
              src={commonImage}
              alt="no poster"
              loading="lazy"
            />
          )}
        </div>
        <div className={styles.title}>
          <h3 className={styles.title}>{original_title}</h3>
        </div>
      </Link>
    </li>
  );
};

// MovieItem.propTypes = {
//   id: propTypes.number.isRequired,
//   title: propTypes.string.isRequired,
//   img: propTypes.string.isRequired,
// };
