import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 135px;

  @media only screen and (max-width: 800px) {
    margin-top: 75px;
  }
`;
