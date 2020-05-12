import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ReactLoading from 'react-loading';

import api from '~/services/api';

import { Container } from './styles';
import BrasilTable from '~/components/BrasilTable';
import CountryCard from '~/components/CountryCard';

export default function Brasil() {
  const [countryData, setCountryData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    loadCountryData();
    loadLastUpdate();
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? (
        <ReactLoading type="spokes" color="#4FFA7B" height="10%" width="10%" />
      ) : (
        <>
          <CountryCard
            showFlag
            countryData={countryData}
            lastUpdate={lastUpdate}
          />
          <BrasilTable />
        </>
      )}
    </Container>
  );
}
