import React, { useState, useEffect } from 'react';

import CountryCard from '~/components/CountryCard';
import api from '~/services/api';

import { Container } from './styles';

function World() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function loadCountriesData() {
      const response = await api.get('api/report/v1/countries');

      setCountriesData(response.data.data);
    }

    loadCountriesData();
  }, []);

  return (
    <Container>
      {countriesData.map((country) => (
        <CountryCard
          key={country.country}
          countryData={country}
          lastUpdate={country.updated_at}
        />
      ))}
    </Container>
  );
}

export default World;
