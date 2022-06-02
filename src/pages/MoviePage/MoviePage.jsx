import styles from './MoviePage.module.css';

import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

import { MovieList } from '../../components/MovieList';
import movieAPI from '../../services/serviceApi';
import { Container } from '../../components/Container/Container';
import ImageLoader from '../../components/UI/Loader/Loader';
import { Notify } from 'notiflix';
import { ButtonLoad } from '../../components/UI/Button';
import { Title } from '../../components/UI/Title';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviePage = () => {
  const [searchParam, setSearchParams] = useSearchParams({});
  const [query, setSetSearchQuery] = useState(searchParam.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(searchParam.get('page') ?? 1);
  const [totalMovie, setTotalMovie] = useState(0);

  const pageHandler = () => {
    setPage(page + 1);
  };
  const SubmitSearchHandler = query => {
    setMovies([]);
    setTotalMovie(0);
    setPage(1);
    setSetSearchQuery(query);
  };

  useEffect(() => {
    if (query) {
      searchMovie(query, page);
    }
    setSearchParams({ query, page });
  }, [query, page]);

  useEffect(() => {
    setSearchParams({ query, page });
  }, [query, page]);
  const searchMovie = (query, page) => {
    setStatus(Status.PENDING);
    movieAPI
      .fetchSearchMovies(query, page)
      .then(({ results, total_results }) => {
        setMovies(movies => [...movies, ...results]);

        setStatus(Status.RESOLVED);
        setTotalMovie(total_results);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  return (
    <Container>
      <div className={styles.movies}>
        <SearchBar onSubmit={SubmitSearchHandler} />
        {status === 'idle' ? (
          <Title
            className={styles.galaryTitle}
            title="No search results yet. Please enter a request"
          />
        ) : null}
        {status === 'pending' ? <ImageLoader /> : null}
        {status === 'rejected' ? Notify.warning(`${error.message}`) : null}
        {status === 'resolved' ? (
          <>
            <MovieList movies={movies} />
            {movies.length < totalMovie ? (
              <ButtonLoad
                className={styles.btnLoad}
                title="Load more"
                onClick={pageHandler}
              />
            ) : (
              <Title
                className={styles.galaryTitle}
                title="no more images from request"
              />
            )}
          </>
        ) : null}
      </div>
    </Container>
  );
};
export default MoviePage;
