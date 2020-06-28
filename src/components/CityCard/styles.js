import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #4d4d4d;
  border-radius: 4px;
  font-size: 2rem;
  color: #fff;
  margin-top: 50px;
  padding: 15px 10px;
  width: 100%;
  max-width: 500px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 15px;
  }
`;

export const Middle = styled.div`
  margin-top: 30px;
  div {
    display: flex;
    justify-content: space-between;
  }

  div + div {
    margin-top: 15px;
  }
`;

export const MiddleFirst = styled.div``;

export const MiddleSecond = styled.div``;

export const MiddleThird = styled.div``;

export const MiddleFourth = styled.div``;

export const MiddleFifth = styled.div``;
