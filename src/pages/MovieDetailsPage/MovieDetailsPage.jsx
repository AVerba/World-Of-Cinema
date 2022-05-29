import styles from './MovieDetailsPage.nodule.css';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import { BackButton } from '../../components/UI/BackButton';
import movieAPI, { fetchMovieDetails } from '../../services/serviceApi';
import { MovieDetails } from '../../components/MovieDetail';
import { Reviews } from '../../components/Reviews';
import { Cast } from '../../components/Cast';
import { DetailNavigation } from '../../components/DitailNavigation';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  console.log(movieID);

  useEffect(() => {
    searchMovieDetails(movieID);
  }, [movieID]);

  const searchMovieDetails = movieID => {
    movieAPI
      .fetchMovieDetails(movieID)
      .then(results => {
        setMovieDetails(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  return (
    <>
      <BackButton />
      {movieDetails && <MovieDetails {...movieDetails} />}

      <DetailNavigation id={movieID} />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="credits" element={<Cast id={movieID} />} />
          <Route path="reviews" element={<Reviews id={movieID} />} />
        </Route>
      </Routes>
    </>
  );
};
