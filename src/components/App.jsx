import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar';

import { lazy, Suspense } from 'react';
import ImageLoader from './UI/Loader/Loader';
// import { MovieDetailsPage } from '../pages/MovieDetailsPage';
// import { MoviePage } from '../pages/MoviePage';
// import { HomePage } from '../pages/HomePage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <Suspense fallback={<ImageLoader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="movies/:movieID/*" element={<MovieDetailsPage />} />
          <Route path="movies" element={<MoviePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
