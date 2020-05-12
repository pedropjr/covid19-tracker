import React, { useState, useEffect, useMemo } from 'react';

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
  const [windowSize, setWindowSize] = useState(undefined);
  const [menuVisibility, setMenuVisibility] = useState(false);

  function handleWindowSize() {
    // add breakpoints
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    handleWindowSize();
  }, []);

  useMemo(() => {
    window.addEventListener('resize', handleWindowSize);
  }, []);

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
      {windowSize <= 800 ? (
        <Button onClick={handleMenuVisibility}>
          <MdReorder size={48} color={menuVisibility ? '#4FFA7B' : '#ffff'} />
        </Button>
      ) : (
        <Right>
          <NavLinkCustom to="/brasil">brasil</NavLinkCustom>
          <NavLinkCustom to="/mundo">mundo</NavLinkCustom>
          <NavLinkCustom to="/sobre">sobre</NavLinkCustom>
        </Right>
      )}
      <Menu
        isVisible={menuVisibility}
        handleMenuVisibility={handleMenuVisibility}
      />
    </Container>
  );
}

export default Header;
