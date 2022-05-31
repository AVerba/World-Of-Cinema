import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../../Container/Container';
import styles from './BackButton.module.css';

export const BackButton = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [from, setFrom] = useState('');

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <Container>
      <button
        className={styles.backBtn}
        title="Back"
        onClick={handleBack}
        type="button"
      >
        Back
      </button>
    </Container>
  );
};
