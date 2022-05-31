import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { CastItem } from './CastItem';
import { Container } from '../../components/Container/Container';
import ImageLoader from '../../components/UI/Loader/Loader';
import { Notify } from 'notiflix';
import propTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = ({ id }) => {
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
              cast.map(item => <CastItem key={item.id} item={item} />)
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
Cast.propTypes = {
  id: propTypes.string.isRequired,
};
export default Cast;
