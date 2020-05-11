import React, { useEffect } from 'react';

// import api from '~/services/api';

import { Container } from './styles';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Main() {
  useEffect(() => {}, []);

  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}
