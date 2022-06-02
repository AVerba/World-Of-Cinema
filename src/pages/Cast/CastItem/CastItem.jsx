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
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.character}>{character}</p>
      </div>
    </li>
  );
};
CastItem.propTypes = {
  name: propTypes.string.isRequired,
  character: propTypes.string.isRequired,
  profile: propTypes.string,
};
