import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/serviceApi';
import { CastItem } from './CastItem';
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
    <ul className={styles.castList}>
      {cast ? (
        cast.map(item => <CastItem item={item} />)
      ) : (
        <div className="noCredits">
          {/*<img width="180px" src={noCredits} alt="no credits" />*/}
          <p>Sorry no credits available</p>
        </div>
      )}
    </ul>
  );
};
