import styles from './NotFoundPage.module.css';
import { Container } from '../../components/Container/Container';

const NotFoundPage = () => {
  return (
    <Container>
      <p className={styles.notfoundPage}>Sorry, but page not found</p>
    </Container>
  );
};

export default NotFoundPage;
