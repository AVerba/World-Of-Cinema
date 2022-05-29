import styles from './HomePage.module.css';

import { Container } from '../../components/Container/Container';
import { MovieList } from '../../components/MovieList';
import { useState, useEffect } from 'react';
import MovieAPI from '../../services/serviceApi';

import { Notify } from 'notiflix';
import ImageLoader from '../../components/UI/Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [trendingMovies, setTrendingMovie] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovies();
  }, []);
  useEffect(() => {
    // console.log(trendingMovies);
  }, [trendingMovies]);

  const fetchMovies = () => {
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
    <Container>
      {status === 'pending' ? <ImageLoader /> : null}
      {status === 'rejected' ? Notify.warning(`${error.message}`) : null}
      {status === 'resolved' ? <MovieList movies={trendingMovies} /> : null}
    </Container>
  );
};
export default HomePage;
