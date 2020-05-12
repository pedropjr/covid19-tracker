import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import {
  Container,
  CountryContainer,
  GraphicContainer,
  CasesContainer,
  Legend,
  Left,
  BottomContainer,
} from './styles';

// eslint-disable-next-line react/prop-types
function CountryCard({ countryName }) {
  const [countryData, setCountryData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    async function loadCountryData() {
      const response = await api.get('api/report/v1/brazil');

      setCountryData([
        response.data.data.deaths.toLocaleString(),
        response.data.data.recovered.toLocaleString(),
        response.data.data.cases.toLocaleString(),
        response.data.data.confirmed.toLocaleString(),
      ]);
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

  const data = {
    labels: ['mortes', 'recuperados', 'casos ativos'],
    datasets: [
      {
        data: [countryData[0], countryData[1], countryData[2]],
        backgroundColor: ['#BA8686', '#4FFA7B', '#FFE500'],
        hoverBackgroundColor: ['#8a6365', '#33a350', '#b09e00'],
      },
    ],
  };

  return (
    <Container>
      <CountryContainer>
        <img
          src="https://www.countryflags.io/br/flat/48.png"
          alt="country_flag"
        />
        <span>{countryName}</span>
      </CountryContainer>
      <GraphicContainer>
        <Doughnut legend={{ display: false }} data={data} />
      </GraphicContainer>

      <CasesContainer>
        <Legend>
          <Left>
            <FaCircle color="#FFE500" size={14} />
            <span>casos ativos</span>
          </Left>
          <span>{countryData[2]}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4FFA7B" size={14} />
            <span>recuperados</span>
          </Left>
          <span>{countryData[1]}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#BA8686" size={14} />
            <span>mortes</span>
          </Left>
          <span>{countryData[0]}</span>
        </Legend>

        <Legend>
          <Left>
            <FaCircle color="#4d4d4d" size={14} />
            <span>total</span>
          </Left>
          <span>{countryData[3]}</span>
        </Legend>
      </CasesContainer>

      <BottomContainer>
        <a href="https://www.who.int/">fonte: OMS</a>
        <span>{lastUpdate}</span>
      </BottomContainer>
    </Container>
  );
}

export default CountryCard;
