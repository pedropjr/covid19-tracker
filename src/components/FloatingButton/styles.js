import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  border-radius: 6px;
  background: #4ffa7b;
  position: absolute;
  bottom: -20px;
  right: 50px;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;

    span {
      color: #111;
      font-weight: bold;
    }

    svg {
      fill: #111;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }

  span {
    font-size: 2rem;
    color: #fff;
  }
`;
