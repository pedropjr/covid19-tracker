import React, { useState, useEffect, useMemo } from 'react';

import { MdReorder } from 'react-icons/md';

import logo from '~/assets/logo.svg';
import { Container, Left, Middle, Right } from './styles';

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

      {windowSize <= 550 ? (
        <MdReorder size={48} color="#fff" />
      ) : (
        <Right>
          <span>brasil</span>
          <span>mundo</span>
          <span>sobre</span>
        </Right>
      )}
    </Container>
  );
}

export default Header;
