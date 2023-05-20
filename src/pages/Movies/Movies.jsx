import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'services/api-movies';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchSearchMovies = async () => {
      setLoading(true);
      try {
        const { results } = searchMovies(query);
        if (results.length === 0) {
          toast.error('There are no movies matching your request.');
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [query]);

  const searchMoviesByQuery = newSearch => {
    if (newSearch.trim() === '') {
      toast.error('Enter a search term.');
    }
    setMovies([]);
    setSearchParams({ query: newSearch });
  };

  return (
    <div>
      <Searchbar onSubmit={searchMoviesByQuery} />
      <ToastContainer position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {error && <p>Something goes wrong</p>}
    </div>
  );
};

export default Movies;
