import styles from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits, IMAGE_URL } from 'services/api-movies';

const CastPage = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCredits = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setActors(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Something goes wrong</p>}
      <ul className={styles.list}>
        {actors.map(actor => (
          <li className={styles.item} key={actor.id}>
            <img
              className={styles.foto}
              width="200px"
              src={
                actor.profile_path
                  ? IMAGE_URL + actor.profile_path
                  : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
              }
              alt={actor.original_name}
            />
            <div className={styles.info}>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastPage;
