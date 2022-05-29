import { Container } from '../Container/Container';
import commonImage from '../UI/commonImage.png';
import styles from './MovieDetail.module.css';

export const MovieDetails = ({
  poster_path,
  title,
  // genres,
  overview,
  vote_average,
}) => {
  console.log(title);
  return (
    <Container>
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
        <h2>{vote_average}</h2>

        <h1>Genres</h1>
        <h2>Genres</h2>

        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </Container>
  );
};
