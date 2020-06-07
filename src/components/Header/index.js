import React, { useState } from 'react';

import { MdReorder } from 'react-icons/md';
import Menu from '~/components/Menu';

import logo from '~/assets/logo.svg';
import {
  Container,
  Left,
  Middle,
  Button,
  Right,
  NavLinkCustom,
} from './styles';

function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  function handleMenuVisibility() {
    setMenuVisibility(!menuVisibility);
  }

  return (
    <Container>
      <Left />
      <Middle>
        <span>COVID-19 Tracker</span>
        <img src={logo} alt="logo" />
      </Middle>
      <Button onClick={handleMenuVisibility}>
        <MdReorder size={48} color="#fff" />
      </Button>

      <Right>
        <NavLinkCustom to="/brasil">brasil</NavLinkCustom>
        <NavLinkCustom to="/mundo">mundo</NavLinkCustom>
      </Right>

      <Menu
        isVisible={menuVisibility}
        handleMenuVisibility={handleMenuVisibility}
      />
    </Container>
  );
}

export default Header;
