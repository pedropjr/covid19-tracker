import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.loading ? 'none' : 'flex')};
  justify-content: center;

  span {
    font-size: 2.4rem;
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
