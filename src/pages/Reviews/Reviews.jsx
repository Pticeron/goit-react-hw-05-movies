import styles from './Reviews.module.css';
import Loader from 'components/Loader/Loader';
import { fetchMovieReviews } from 'services/api-movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      setLoading(true);
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something goes wrong</p>}
      {reviews.length !== 0 && (
        <div>
          <ul className={styles.reviewslist}>
            {reviews.map(review => (
              <li key={review.id} className={styles.reviewsitem}>
                <h2>Author: {review.author}</h2>
                <p className={styles.reviewstext}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
