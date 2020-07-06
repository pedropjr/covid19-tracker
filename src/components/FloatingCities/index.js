/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getCities from '~/queries/getCities';
import Input from '~/components/Input';
import { setCitySearchInput } from '~/store/modules/application/actions';

import { Container, CustomCloseCircle } from './styles';
import CityCard from '~/components/CityCard';

function FloatingCities({ isShowing, setIsShowing }) {
  const dispatch = useDispatch();
  const [cities, setCities] = useState(undefined);
  const { citySearchInput } = useSelector((state) => state.application);

  useEffect(() => {
    async function handleSearchCity() {
      const response = await getCities(citySearchInput);

      if (response) {
        setCities(response.data.results);
      }
    }

    if (citySearchInput !== '') {
      handleSearchCity();
    }

    return () => {
      dispatch(setCitySearchInput(''));
    };
  }, [citySearchInput, dispatch]);

  return (
    <Container isShowing={isShowing}>
      <div>
        <CustomCloseCircle onClick={() => setIsShowing(false)} />
      </div>

      <Input
        placeholder="Digite o nome de um município"
        debounceTimeout={1000}
      />

      {cities &&
        cities.map((city) => (
          <CityCard key={city.city_ibge_code} city={city} />
        ))}
    </Container>
  );
}

export default FloatingCities;
