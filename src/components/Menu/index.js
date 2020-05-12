/* eslint-disable react/prop-types */
import React from 'react';

import { Container, NavLinkCustom } from './styles';

function Menu({ handleMenuVisibility, isVisible = false }) {
  return (
    <Container isVisible={isVisible}>
      <NavLinkCustom to="/brasil" onClick={handleMenuVisibility}>
        brasil
      </NavLinkCustom>
      <NavLinkCustom to="/mundo" onClick={handleMenuVisibility}>
        mundo
      </NavLinkCustom>
      <NavLinkCustom to="/sobre" onClick={handleMenuVisibility}>
        sobre
      </NavLinkCustom>
    </Container>
  );
}

export default Menu;
