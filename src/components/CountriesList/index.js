import React from 'react';
import PropTypes from 'prop-types';

import CountryCard from '~/components/CountryCard';

import { Container } from './styles';

export default function CountriesList({ pagedWorld }) {
  return (
    <Container>
      {pagedWorld.map((country) => (
        <CountryCard key={country.country} countryData={country} />
      ))}
    </Container>
  );
}

CountriesList.propTypes = {
  pagedWorld: PropTypes.arrayOf(PropTypes.object).isRequired,
};
