import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { CastItem } from '../Cast/CastItem';
import { ReviewItem } from './ReviewItem';
import { Container } from '../Container/Container';
import ImageLoader from '../UI/Loader/Loader';
import { Notify } from 'notiflix';
import { MovieList } from '../MovieList';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchReviews(id);
    setStatus(Status.PENDING);
  }, [id]);
  const searchReviews = id => {
    movieAPI
      .fetchReviewsMovies(id)
      .then(({ results }) => {
        setReviews(results);
        setStatus(Status.RESOLVED);
        console.log(id);
        console.log(results);
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
        <Container>
          <ul className={styles.reviewsList}>
            {reviews ? (
              reviews.map(item => <ReviewItem item={item} />)
            ) : (
              <div className="noReviews">
                {/*<img width="180px" src={noCredits} alt="no credits" />*/}
                <p>Sorry no credits available</p>
              </div>
            )}
          </ul>
        </Container>
      ) : null}
    </>
  );
};
