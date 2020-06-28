/* eslint-disable react/prop-types */
import React from 'react';

import sp from '~/assets/SP.png';

import {
  Container,
  Top,
  Middle,
  MiddleFirst,
  MiddleSecond,
  MiddleThird,
  MiddleFourth,
  MiddleFifth,
} from './styles';

function CityCard({ city }) {
  return (
    <Container>
      <Top>
        <img src={sp} alt="state_image" />
        <span>{city.city}</span>
      </Top>
      <Middle>
        <MiddleFirst>
          <span>casos confirmados</span>
          <span>{city.confirmed}</span>
        </MiddleFirst>
        <MiddleSecond>
          <span>mortes</span>
          <span>{city.deaths}</span>
        </MiddleSecond>
        <MiddleThird>
          <span>habitantes</span>
          <span>{city.estimated_population_2019}</span>
        </MiddleThird>
        <MiddleFourth>
          <span>estado</span>
          <span>{city.state}</span>
        </MiddleFourth>
        <MiddleFifth>
          <span>última atualização</span>
          <span>{city.date}</span>
        </MiddleFifth>
      </Middle>
    </Container>
  );
}

export default CityCard;
