import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { ReviewItem } from './ReviewItem';
import { Container } from '../../components/Container/Container';
import ImageLoader from '../../components/UI/Loader/Loader';
import { Notify } from 'notiflix';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    searchReviews(movieID);
    setStatus(Status.PENDING);
  }, [movieID]);
  const searchReviews = movieID => {
    movieAPI
      .fetchReviewsMovies(movieID)
      .then(({ results }) => {
        setReviews(results);
        setStatus(Status.RESOLVED);
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
            {reviews.length > 0 ? (
              reviews.map(item => (
                <ReviewItem
                  key={item.id}
                  avatar={item.author_details.avatar_path}
                  username={item.author_details.username}
                  content={item.content}
                  item={item}
                />
              ))
            ) : (
              <div className="noReviews">
                {/*<img width="180px" src={noCredits} alt="no credits" />*/}
                <p>
                  Sorry, we didn't find any reviews for this movie. You can be
                  the first
                </p>
              </div>
            )}
          </ul>
        </Container>
      ) : null}
    </>
  );
};

export default Reviews;
