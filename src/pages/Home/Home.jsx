import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api-movies';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <h1 className={styles.title}>Tranding today</h1>
      {movies && <MoviesList movies={movies} />}
      {error && <p>Something goes wrong</p>}
    </main>
  );
};

export default Home;
