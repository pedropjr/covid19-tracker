import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import { Container } from './styles';
import BrasilTable from '~/components/BrasilTable';
import CountryCard from '~/components/CountryCard';

export default function Brasil() {
  const [countryData, setCountryData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    async function loadCountryData() {
      const response = await api.get('api/report/v1/brazil');

      setCountryData(response.data.data);
    }
    async function loadLastUpdate() {
      const response = await api.get('api/report/v1/brazil');
      const formatedDate = format(
        parseISO(response.data.data.updated_at),
        'dd/MM/yyyy HH:mm',
        {
          locale: ptBR,
        }
      );
      setLastUpdate(formatedDate);
    }

    loadCountryData();
    loadLastUpdate();
  }, []);

  return (
    <Container>
      <CountryCard showFlag countryData={countryData} lastUpdate={lastUpdate} />
      <BrasilTable />
    </Container>
  );
}
