import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #101010;
  align-items: center;
  padding: 20px 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  height: 135px;
  transition: box-shadow 0.3s;

  div {
    flex: 1;
  }

  @media (max-width: 500px) {
    padding: 10px 15px;
    height: 75px;
  }
`;

export const Left = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    color: #fff;
    font-size: 4rem;
  }
  img {
    height: 48px;
    width: 48px;
  }

  @media (max-width: 1000px) {
    flex-direction: row;
  }

  @media (max-width: 500px) {
    span {
      font-size: 3rem;
    }
  }
`;

export const Button = styled.button`
  display: none;
  background: none;
  border: 0;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 2.4rem;

  a {
    padding-right: 20px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: {
    color: '#4FFA7B',
    borderBottom: '1px solid #4FFA7B',
    borderBottomWidth: '5px',
  },
}))`
  color: #fff;
`;
