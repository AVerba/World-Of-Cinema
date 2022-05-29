import styles from './HomePage.module.css';
import propTypes from 'prop-types';
import { Container } from '../../components/Container/Container';
import { MovieList } from '../../components/MovieList';
import { useState, useEffect } from 'react';
import MovieAPI from '../../services/serviceApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const HomePage = () => {
  const [trendingMovies, setTrendingMovie] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    // console.log(trendingMovies);
  }, [trendingMovies]);

  const fetchMovies = () => {
    setStatus(Status.PENDING);
    MovieAPI.fetchTrendsMovies()
      .then(({ results }) => {
        const composedMovieData = results.map(
          ({ id, original_title, poster_path }) => ({
            id,
            original_title,
            poster_path,
          })
        );
        setTrendingMovie(composedMovieData);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  return (
    <>
      <Container>
        <MovieList movies={trendingMovies} />
      </Container>
    </>
  );
};
