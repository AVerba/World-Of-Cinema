import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { CastItem } from './CastItem';
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

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    searchCast(movieID);
  }, [movieID]);
  const searchCast = id => {
    setStatus(Status.PENDING);
    movieAPI
      .fetchCastMovie(movieID)
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
            {cast.length > 0 ? (
              cast.map(item => (
                <CastItem
                  key={item.id}
                  profile={item.profile_path}
                  character={item.character}
                  name={item.name}
                />
              ))
            ) : (
              <p className="noCredits">Sorry no credits available</p>
            )}
          </ul>
        </Container>
      ) : null}
    </>
  );
};

export default Cast;
