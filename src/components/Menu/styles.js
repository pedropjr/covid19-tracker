import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.95);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 5px;
  z-index: 5;

  a + a {
    padding-top: 20px;
  }

  svg {
    margin-top: 100px;
  }
`;

export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: {
    color: '#4FFA7B',
    borderBottom: '1px solid #4FFA7B',
    borderBottomWidth: '2px',
  },
}))`
  color: #fff;
`;
