import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Container } from '../../Container/Container';

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
      <button title="Back" onClick={handleBack} type="button">
        back
      </button>
    </Container>
  );
};
