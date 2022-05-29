import styles from './ReviewItem.module.css';
import propTypes from 'prop-types';
import NoPhoto from '../../UI/NoPhoto.png';
export const ReviewItem = ({ item }) => {
  const { id, author_details, content } = item;
  const { avatar_path, name } = author_details;
  return (
    <li className={styles.reviewItem} key={id}>
      <div className={styles.userInfo}>
        {avatar_path ? (
          <img
            className={styles.avatar}
            src={`https://themoviedb.org/t/p/w185${avatar_path}`}
            alt={name}
          />
        ) : (
          <img className={styles.avatar} src={NoPhoto} alt={name} />
        )}

        <h4 className={styles.name}>{name}</h4>
      </div>

      <p className={styles.review}>{content}</p>
    </li>
  );
};
