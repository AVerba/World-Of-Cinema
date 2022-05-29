import styles from './MoviePage.module.css';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import { MovieList } from '../../components/MovieList';
import movieAPI from '../../services/serviceApi';
import { Container } from '../../components/Container/Container';
import ImageLoader from '../../components/UI/Loader/Loader';
import { Notify } from 'notiflix';

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

  useEffect(() => {
    if (query) {
      searchMovie(query);
      // setStatus(Status.PENDING);
    }
  }, [query]);

  useEffect(() => {
    setSearchParams({ query });
  }, [query, setSearchParams]);
  const searchMovie = () => {
    movieAPI
      .fetchSearchMovies(query)
      .then(({ results }) => {
        setStatus(Status.RESOLVED);
        setSearchResults(results);
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
      {status === 'resolved' ? <MovieList movies={searchResults} /> : null}
    </Container>
  );
};
export default MoviePage;
