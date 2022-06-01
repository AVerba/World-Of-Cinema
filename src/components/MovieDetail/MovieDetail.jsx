import { Container } from '../Container/Container';
import commonImage from '../UI/commonImage.png';
import styles from './MovieDetail.module.css';
import propTypes from 'prop-types';

export const MovieDetails = ({
  poster,
  title,
  genres,
  overview,
  vote,
  backdrop,
}) => {
  const commonGenres = [];
  genres.map(item => {
    commonGenres.push(item.name);
  });

  return (
    <Container>
      <div
        className={styles.movieDetail}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 19%, rgba(113,69,69,0.5441526952577906) 50%, rgba(252,176,69,0.009138689655549759) 100%), url("https://themoviedb.org/t/p/w1280${backdrop}")`,
        }}
      >
        <div className={styles.imageTumb}>
          {poster !== null ? (
            <picture>
              <source
                srcSet={`https://themoviedb.org/t/p/w500${poster}`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`https://themoviedb.org/t/p/w342${poster}`}
                media="(min-width: 768px)"
              />
              <img
                alt={title}
                className={styles.poster}
                loading="lazy"
                src={`https://themoviedb.org/t/p/w342${poster}`}
              />
            </picture>
          ) : (
            <img src={commonImage} alt="no poster" loading="lazy" />
          )}
        </div>
        <div className={styles.infoTumb}>
          <h1>{title}</h1>
          <h2>Votes</h2>
          <h4>{vote}</h4>

          <h2>Genres</h2>
          <h4>{commonGenres.join(', ')}</h4>

          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Container>
  );
};
MovieDetails.propTypes = {
  genres: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  poster: propTypes.string,
  vote: propTypes.number.isRequired,
};
