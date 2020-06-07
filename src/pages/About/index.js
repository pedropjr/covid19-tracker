/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {
  Container,
  AboutContainer,
  Message,
  Thank,
  API,
  SourceCode,
} from './styles';

function About() {
  return (
    <Container>
      <AboutContainer>
        <Message>Aplicação desenvolvida por Pedro Borges Jr.</Message>

        <API>
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api">
            🚀 API de dados
          </a>
        </API>
        <SourceCode>
          <a href="https://github.com/pedropjr/covid19-tracker">
            ⚛️ repositório github
          </a>
        </SourceCode>
      </AboutContainer>
    </Container>
  );
}

export default About;
