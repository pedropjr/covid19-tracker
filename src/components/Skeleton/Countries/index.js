import React from 'react';

import SkeletonCountryCard from '~/components/Skeleton/CountryCard';

import { Container } from './styles';

export default function SkeletonCountriesList() {
  return (
    <Container>
      <SkeletonCountryCard />
      <SkeletonCountryCard />
      <SkeletonCountryCard />
      <SkeletonCountryCard />
    </Container>
  );
}
