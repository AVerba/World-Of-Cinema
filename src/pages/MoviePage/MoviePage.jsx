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
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovie, setTotalMovie] = useState(0);

  const pageHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (query) {
      searchMovie(query, currentPage);
      setStatus(Status.PENDING);
    }
  }, [query, currentPage]);

  useEffect(() => {
    setSearchParams({ query });
  }, [query, setSearchParams]);
  const searchMovie = (query, page) => {
    movieAPI
      .fetchSearchMovies(query, page)
      .then(({ results, total_results }) => {
        setSearchResults(searchResults => [...searchResults, ...results]);

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
      <SearchBar onSubmit={setSetSearchQuery} />
      {status === 'pending' ? <ImageLoader /> : null}
      {status === 'rejected' ? Notify.warning(`${error.message}`) : null}
      {status === 'resolved' ? (
        <>
          <MovieList movies={searchResults} />
          {searchResults.length < totalMovie ? (
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
    </Container>
  );
};
export default MoviePage;
