import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${(props) => props.loading && 'center'};
  position: relative;
  padding: 50px 200px;
  margin-top: 135px;

  @media only screen and (max-width: 1300px) {
    padding: 50px 50px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 500px) {
    margin-top: 75px;
  }
`;
