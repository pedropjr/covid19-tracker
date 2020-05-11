import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 200px;

  @media only screen and (max-width: 800px) {
    padding: 50px 50px;
  }

  @media only screen and (max-width: 450px) {
    padding: 50px 0;
  }
`;
