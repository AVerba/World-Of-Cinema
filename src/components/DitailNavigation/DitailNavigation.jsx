import styles from './DetailNavigation.module.css';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import propTypes from 'prop-types';

export const DetailNavigation = ({ id }) => {
  return (
    <Container>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={`/movies/${id}/cast`}>
            Cast
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={`/movies/${id}/reviews`}>
            Reviews
          </Link>
        </li>
      </ul>
    </Container>
  );
};
DetailNavigation.propTypes = {
  id: propTypes.string.isRequired,
};
