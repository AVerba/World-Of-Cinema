import styles from './DetailNavigation.module.css';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';

export const DetailNavigation = ({ id }) => {
  return (
    <Container>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={`/movies/${id}/credits`}>
            Credits
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
