import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;

  @media (max-width: 500px) {
    margin-top: 75px;
  }
`;
