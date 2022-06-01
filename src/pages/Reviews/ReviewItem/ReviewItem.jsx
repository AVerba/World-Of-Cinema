import styles from './ReviewItem.module.css';
import propTypes from 'prop-types';
import NoPhoto from '../../../components/UI/commonUser.png';

export const ReviewItem = ({ author, content, username, avatar }) => {
  const addDefaultSrc = event => {
    event.target.src = NoPhoto;
  };

  return (
    <li className={styles.reviewItem}>
      <div className={styles.userInfo}>
        {avatar ? (
          <img
            className={styles.avatar}
            src={`https://themoviedb.org/t/p/w185${avatar}`}
            alt={username}
            onError={addDefaultSrc}
          />
        ) : (
          <img className={styles.avatar} src={NoPhoto} alt={username} />
        )}
        {username ? (
          <h4 className={styles.name}>{username}</h4>
        ) : (
          <h4 className={styles.name}>Anonymous</h4>
        )}
      </div>

      <p className={styles.review}>{content}</p>
    </li>
  );
};
ReviewItem.propTypes = {
  avatar_path: propTypes.string,
  username: propTypes.string,
  content: propTypes.string.isRequired,
};
