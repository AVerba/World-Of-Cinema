import styles from './Navigation.module.css';
import propTypes from 'prop-types';

import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/home" className={styles.link}>
          HOME
        </NavLink>
        <NavLink exact to="/movies" className={styles.link}>
          MOVIES
        </NavLink>
      </nav>
    </>
  );
};
