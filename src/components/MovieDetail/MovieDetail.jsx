import { Container } from '../Container/Container';
import commonImage from '../UI/commonImage.png';
import styles from './MovieDetail.module.css';
import propTypes from 'prop-types';

export const MovieDetails = ({
  poster_path,
  title,
  genres,
  overview,
  vote_average,
  backdrop_path,
}) => {
  const commonGanres = [];
  genres.map(item => {
    commonGanres.push(item.name);
  });

  return (
    <Container>
      <div
        className={styles.movieDetail}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 19%, rgba(113,69,69,0.5441526952577906) 50%, rgba(252,176,69,0.009138689655549759) 100%), url("https://themoviedb.org/t/p/w1280${backdrop_path}")`,
        }}
      >
        <div className={styles.imageTumb}>
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
                alt={title}
                className={styles.poster}
                loading="lazy"
                src={`https://themoviedb.org/t/p/w342${poster_path}`}
              />
            </picture>
          ) : (
            <img src={commonImage} alt="no poster" loading="lazy" />
          )}
        </div>
        <div className={styles.infoTumb}>
          <h1>{title}</h1>
          <h2>Votes</h2>
          <h4>{vote_average}</h4>

          <h2>Genres</h2>
          <h4>{commonGanres.join(', ')}</h4>

          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Container>
  );
};
MovieDetails.propTypes = {
  genres: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  poster_path: propTypes.string.isRequired,
  vote_average: propTypes.number.isRequired,
};
