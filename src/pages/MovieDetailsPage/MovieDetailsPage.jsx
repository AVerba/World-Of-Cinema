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
import { Loading as loading, Notify } from 'notiflix';
import ImageLoader from '../../components/UI/Loader/Loader';
import { MovieList } from '../../components/MovieList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  console.log(movieID);

  useEffect(() => {
    searchMovieDetails(movieID);
    setStatus(Status.PENDING);
  }, [movieID]);

  const searchMovieDetails = movieID => {
    movieAPI
      .fetchMovieDetails(movieID)
      .then(results => {
        setMovieDetails(results);
        setStatus(Status.RESOLVED);
        loading.remove();
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
        loading.remove();
      });
  };

  return (
    <>
      {status === 'pending' ? <ImageLoader /> : null}
      {status === 'rejected' ? Notify.warning(`${error.message}`) : null}
      {status === 'resolved' ? (
        <>
          <BackButton />
          {movieDetails && <MovieDetails {...movieDetails} />}

          <DetailNavigation id={movieID} />
        </>
      ) : null}

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="credits" element={<Cast id={movieID} />} />
          <Route path="reviews" element={<Reviews id={movieID} />} />
        </Route>
      </Routes>
    </>
  );
};
export default MovieDetailsPage;
