/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

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
      <IoMdCloseCircleOutline
        onClick={handleMenuVisibility}
        size={60}
        color="#fff"
      />
    </Container>
  );
}

export default Menu;
