import React from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';

import { setSearchInput } from '~/store/modules/application/actions';

import { Container } from './styles';

function Input() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatch(setSearchInput(event.target.value));
  }

  return (
    <Container>
      <DebounceInput
        type="text"
        debounceTimeout={600}
        placeholder="Digite o nome de um país"
        onChange={handleSearchInput}
      />
      <MdSearch size={30} color="#fff" />
    </Container>
  );
}

export default Input;
