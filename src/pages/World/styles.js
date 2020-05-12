import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  padding: 50px;

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
  }

  @media only screen and (max-width: 590px) {
    padding: 0;
  }
`;
