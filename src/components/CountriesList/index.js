import React from 'react';
import PropTypes from 'prop-types';

import SkeletonCountryCard from '~/components/Skeleton/CountryCard';
import CountryCard from '~/components/CountryCard';

import { Container } from './styles';

export default function CountriesList({ loading, pagedWorld }) {
  return (
    <Container loading={loading}>
      {loading ? (
        <>
          <SkeletonCountryCard />
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

CountriesList.propTypes = {
  loading: PropTypes.number.isRequired,
  pagedWorld: PropTypes.arrayOf(PropTypes.object).isRequired,
};
