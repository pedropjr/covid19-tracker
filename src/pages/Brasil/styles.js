import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 200px;

  @media only screen and (max-width: 1100px) {
    padding: 50px 50px;
  }

  @media only screen and (max-width: 800px) {
    padding: 50px 0;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 5px 0;
  }
`;
