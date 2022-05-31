import styles from './DetailNavigation.module.css';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import propTypes from 'prop-types';

export const DetailNavigation = ({ id }) => {
  return (
    <Container>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ['active', styles.activeLink].join(' ')
                : styles.navlink
            }
            to={`/movies/${id}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ['active', styles.activeLink].join(' ')
                : styles.navlink
            }
            to={`/movies/${id}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};
DetailNavigation.propTypes = {
  id: propTypes.string.isRequired,
};
