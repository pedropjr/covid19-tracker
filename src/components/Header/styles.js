import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/**
 * small: < 525
 * medium: 525 <= x <= 900
 * large: > 900
 */

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #101010;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;

  div {
    flex: 1;
  }

  @media only screen and (max-width: 800px) {
    align-items: flex-start;
  }

  @media only screen and (max-width: 535px) {
    padding: 20px 5px;
  }
`;

export const Left = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #fff;
    font-size: 40px;
  }
  img {
    height: 48px;
    width: 48px;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 50px;
    span {
      display: none;
    }
  }

  @media only screen and (max-width: 535px) {
    flex-direction: row;
    white-space: nowrap;
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: flex-end;

  a {
    padding-right: 20px;
  }

  a:nth-child(3) {
    padding-right: 0;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
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
