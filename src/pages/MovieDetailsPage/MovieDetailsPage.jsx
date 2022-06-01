import styles from './MovieDetailsPage.module.css';

import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import { BackButton } from '../../components/UI/BackButton';
import movieAPI from '../../services/serviceApi';
import { MovieDetails } from '../../components/MovieDetail';

import { lazy, Suspense } from 'react';
import { DetailNavigation } from '../../components/DitailNavigation';
import { Notify } from 'notiflix';
import ImageLoader from '../../components/UI/Loader/Loader';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  return (
    <>
      {status === 'pending' ? <ImageLoader /> : null}
      {status === 'rejected' ? Notify.warning(`${error.message}`) : null}
      {status === 'resolved' ? (
        <>
          <BackButton />
          {movieDetails && (
            <MovieDetails
              poster={movieDetails.poster_path}
              title={movieDetails.title}
              genres={movieDetails.genres}
              overview={movieDetails.overview}
              vote={movieDetails.vote_average}
              backdrop={movieDetails.backdrop_path}
            />
          )}

          <DetailNavigation id={movieID} />
        </>
      ) : null}
      <Suspense fallback={<ImageLoader />}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
