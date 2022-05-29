import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index path="home" element={<HomePage />} />
        <Route path="movies/:movieID/*" element={<MovieDetailsPage />} />
        <Route path="movies" element={<MoviePage />} />
      </Route>
    </Routes>
  );
};
