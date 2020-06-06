import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldInfoRequest } from '~/store/modules/application/actions';
import CountryCard from '~/components/CountryCard';

import { Container } from './styles';
import SkeletonCountryCard from '~/components/Skeleton/CountryCard';

function World() {
  const dispatch = useDispatch();
  const { world } = useSelector((state) => state.application);
  const { loading } = useSelector((state) => state.application);

  useEffect(() => {
    async function loadCountriesData() {
      dispatch(getWorldInfoRequest());
    }
    loadCountriesData();
  }, [dispatch]);

  return (
    <Container loading={loading}>
      {loading ? (
        <>
          <SkeletonCountryCard />
          <SkeletonCountryCard />
          <SkeletonCountryCard />
        </>
      ) : (
        <>
          {world.map((country) => (
            <CountryCard key={country.country} countryData={country} />
          ))}
        </>
      )}
    </Container>
  );
}

export default World;
