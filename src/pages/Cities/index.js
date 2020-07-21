import React from 'react';
import { useSelector } from 'react-redux';

import InputV2 from '~/components/InputV2';

import { Container } from './styles';
import CityCard from '~/components/CityCard';
import SkeletonCityCard from '~/components/Skeleton/CityCard';

function Cities() {
  const { cities, cityLoading } = useSelector((state) => state.application);

  return (
    <Container>
      <InputV2 placeholder="Digite o nome de um município" />
      {cityLoading && <SkeletonCityCard />}
      {cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
}

export default Cities;
