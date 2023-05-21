import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/Home/Home'));
const MoviesPage = lazy(() => import('./pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('./pages/Cast/Cast'));
const ReviewsPage = lazy(() => import('./pages/Reviews/Reviews'));

const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<CastPage />} />
            <Route path='reviews' element={<ReviewsPage />} />
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default App;
