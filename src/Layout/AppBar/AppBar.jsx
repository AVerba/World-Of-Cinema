import styles from './AppBar.module.css';

import { Container } from '../../components/Container/Container';
import { Navigation } from '../../components/Navigation';
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
