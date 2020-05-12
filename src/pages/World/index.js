import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import CountryCard from '~/components/CountryCard';
import api from '~/services/api';

import { Container } from './styles';

function World() {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCountriesData() {
      setLoading(true);
      const response = await api.get('api/report/v1/countries');

      setCountriesData(response.data.data);
      setLoading(false);
    }

    loadCountriesData();
  }, []);

  return (
    <Container loading={loading}>
      {loading ? (
        <ReactLoading type="spokes" color="#4FFA7B" height="10%" width="10%" />
      ) : (
        <>
          {' '}
          {countriesData.map((country) => (
            <CountryCard
              key={country.country}
              countryData={country}
              lastUpdate={country.updated_at}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default World;
