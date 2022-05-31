import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink exact="true" to="/" className={styles.link}>
          HOME
        </NavLink>
        <NavLink exact="true" to="/movies" className={styles.link}>
          MOVIES
        </NavLink>
      </nav>
    </>
  );
};
