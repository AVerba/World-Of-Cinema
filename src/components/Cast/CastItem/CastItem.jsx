import styles from './CastItem.module.css';
import propTypes from 'prop-types';
import NoPhoto from '../../UI/NoPhoto.png';

export const CastItem = ({ item }) => {
  const { id, name, character, profile_path } = item;
  return (
    <li className={styles.castItem} key={id}>
      {profile_path ? (
        <img
          className={styles.photo}
          src={`https://themoviedb.org/t/p/w185${profile_path}`}
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
  item: propTypes.objectOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      character: propTypes.string.isRequired,
      profile_path: propTypes.string.isRequired,
    })
  ),
};
