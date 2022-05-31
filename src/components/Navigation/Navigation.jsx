import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
            isActive ? ['active', styles.activeLink].join(' ') : styles.link
          }
        >
          HOME
        </NavLink>
        <NavLink
          exact="true"
          to="/movies"
          className={({ isActive }) =>
            isActive ? ['active', styles.activeLink].join(' ') : styles.link
          }
        >
          MOVIES
        </NavLink>
      </nav>
    </>
  );
};
