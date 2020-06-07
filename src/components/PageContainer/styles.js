import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;

  span {
    font-size: 25px;
    color: #fff;
    padding: 0 10px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const PageButton = styled.button`
  background: #4ffa7b;
  border-radius: 4px;
  border: 0;
`;
