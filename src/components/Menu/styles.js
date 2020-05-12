import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #4ffa7b;
  position: absolute;
  top: 70px;
  right: 10px;
  width: 180px;
  border-radius: 4px;
  padding: 5px;
  z-index: 5;
  -moz-box-shadow: 0 0 200px #ccc;
  -webkit-box-shadow: 0 0 200px #ccc;
  box-shadow: 0 0 200px #ccc;
  height: 130px;
`;

export const NavLinkCustom = styled(NavLink)`
  color: #fff;
`;
