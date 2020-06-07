/* eslint-disable react/prop-types */
import React from 'react';

import SkeletonCountryCard from '~/components/Skeleton/CountryCard';
import CountryCard from '~/components/CountryCard';

import { Container } from './styles';

function CountriesList({ loading, pagedWorld }) {
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
          {pagedWorld.map((country) => (
            <CountryCard key={country.country} countryData={country} />
          ))}
        </>
      )}
    </Container>
  );
}

export default CountriesList;
