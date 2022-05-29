import styles from './MoviePage.module.css';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { MovieList } from '../../components/MovieList';
import movieAPI from '../../services/serviceApi';
import { Container } from '../../components/Container/Container';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const MoviePage = () => {
  const [searchQuery, setSetSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (searchQuery) {
      searchMovie(searchQuery);
    }
  }, [searchQuery]);

  const searchMovie = () => {
    movieAPI
      .fetchSearchMovies(searchQuery)
      .then(({ results }) => {
        setSearchResults(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };
  return (
    <Container>
      <SearchBar onSubmit={setSetSearchQuery} />
      <MovieList movies={searchResults} />
    </Container>
  );
};
