import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #4d4d4d;
  border-radius: 4px;
  padding: 15px 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 50px;

  span + span {
    margin-top: 10px;
  }
`;
