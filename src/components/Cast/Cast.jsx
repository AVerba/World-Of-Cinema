import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { CastItem } from './CastItem';
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

export const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchCast(id);
  }, [id]);
  const searchCast = id => {
    setStatus(Status.PENDING);
    movieAPI
      .fetchCastMovie(id)
      .then(({ cast }) => {
        setCast(cast);
        setStatus(Status.RESOLVED);
        console.log(id);
        console.log(cast);
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
          <ul className={styles.castList}>
            {cast ? (
              cast.map(item => <CastItem item={item} />)
            ) : (
              <div className="noCredits">
                <p>Sorry no credits available</p>
              </div>
            )}
          </ul>
        </Container>
      ) : null}
    </>
  );
};
