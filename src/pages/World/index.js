import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/** */

import CountryCard from '~/components/CountryCard';
import api from '~/services/api';

import { Container } from './styles';

function World() {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    async function loadCountriesData() {
      setLoading(1);
      const response = await api.get('api/report/v1/countries');

      setCountriesData(response.data.data);
      setLoading(0);
    }

    loadCountriesData();
  }, []);

  return (
    <Container loading={loading}>
      {loading ? (
        <span>carregando...</span>
      ) : (
        <>
          {countriesData.map((country) => (
            <CountryCard
              key={country.country}
              countryData={country}
              lastUpdate={format(
                parseISO(country.updated_at),
                'dd/MM/yyyy HH:mm',
                {
                  locale: ptBR,
                }
              )}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default World;
