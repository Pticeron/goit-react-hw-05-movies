import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
// import { useEffect } from "react";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  //     useEffect(() => {
  // // http запит
  //     }, [])
console.log(location);

  return (
    <>
    <h1>MovieDetails: {movieId} </h1>
    <Link to="/movies">back to go</Link>
    <ul>
      <li>
        <Link to='cast'>Cast</Link>
      </li>
      <li>
        <Link to='reviews'>Reviews</Link>
      </li>
    </ul>
    <Outlet />
  </>
  );
};
  


export default MovieDetails;
