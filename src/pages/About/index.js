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
        <Message>
          Essa aplicação foi desenvolvida apenas com o intuito de aprendizado.
          Todos os dados da aplicação são provenientes da Organização Mundial de
          Saúde.
        </Message>
        <Thank>
          Gostaria de agradecer ao Arthur Ribeiro por disponibilizar a API que
          tornou essa aplicação possível.
        </Thank>

        <API>
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api">
            🚀 repositório API
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
