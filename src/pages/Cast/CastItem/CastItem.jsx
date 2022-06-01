import styles from './CastItem.module.css';
import propTypes from 'prop-types';
import NoPhoto from '../../../components/UI/NoPhoto.png';

export const CastItem = ({ name, character, profile }) => {
  return (
    <li className={styles.castItem}>
      {profile ? (
        <img
          className={styles.photo}
          src={`https://themoviedb.org/t/p/w185${profile}`}
          alt={name}
        />
      ) : (
        <img className={styles.photo} src={NoPhoto} alt={name} />
      )}

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.character}>{character}</p>
    </li>
  );
};
CastItem.propTypes = {
  name: propTypes.string.isRequired,
  character: propTypes.string.isRequired,
  profile: propTypes.string,
};
