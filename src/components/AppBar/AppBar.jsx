import styles from './AppBar.module.css';

import { Container } from '../Container/Container';
import { Navigation } from '../Navigation';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <Outlet />
    </>
  );
};
