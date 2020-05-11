import React, { useState, useEffect, useMemo } from 'react';

import { MdReorder } from 'react-icons/md';

import logo from '~/assets/logo.svg';
import { Container, Left, Middle, Right, NavLinkCustom } from './styles';

function Header() {
  const [windowSize, setWindowSize] = useState(undefined);

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

  return (
    <Container>
      <Left />
      <Middle>
        <span>COVID-19 Tracker</span>
        <img src={logo} alt="logo" />
      </Middle>
      {windowSize <= 800 ? (
        <MdReorder size={48} color="#fff" />
      ) : (
        <Right>
          <NavLinkCustom to="/brasil">brasil</NavLinkCustom>
          <NavLinkCustom to="/mundo">mundo</NavLinkCustom>
          <NavLinkCustom to="/sobre">sobre</NavLinkCustom>
        </Right>
      )}
    </Container>
  );
}

export default Header;
