import React, { useEffect } from 'react';

// import api from '~/services/api';

import { Container } from './styles';
import BrasilTable from '~/components/BrasilTable';
import CountryCard from '~/components/CountryCard';

export default function Brasil() {
  useEffect(() => {}, []);

  return (
    <Container>
      <CountryCard countryName="brasil" />
      <BrasilTable />
    </Container>
  );
}
