import React from 'react';

import { Container, Update } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>todos os dados são fornecidos pela OMS.</span>
      <Update>
        <span>última atualização</span>
        <span>11/05/2020</span>
      </Update>
    </Container>
  );
}
