import React from 'react';
import { Skeleton } from '@material-ui/lab';

import { Container } from './styles';

function SkeletonCountryCard() {
  return (
    <Container>
      <Skeleton variant="circle" />
      <Skeleton variant="rect" width={300} height={100} />
      <Skeleton variant="rect" width={300} height={100} />
    </Container>
  );
}

export default SkeletonCountryCard;
