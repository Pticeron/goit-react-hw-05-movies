import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie1',
    'movie2',
    'movie3',
    'movie4',
    'movie5',
  ]);
const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  //     useEffect(() => {
  // // http запит
  //     }, [])

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  console.log(location);

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>{movie}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
