import React from 'react';

// import api from '~/services/api';

import { Container } from './styles';
import Header from '~/components/Header';
import BrasilTable from '~/components/BrasilTable';
import Footer from '~/components/Footer';

export default function Brasil() {
  return (
    <>
      <Header />
      <Container>
        <BrasilTable />
        <Footer />
      </Container>
    </>
  );
}
