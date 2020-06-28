import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import formatString from '~/util/formatString';
import secondaryApi from '~/services/secondaryApi';

import { Container, InputContainer, SearchButtonContainer } from './styles';
import CityCard from '~/components/CityCard';

function Cities() {
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState([]);
  const [loaded, setLoaded] = useState(0);

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  async function handleSearchCity() {
    setLoaded(0);
    const formattedString = formatString(searchValue);

    const response = await secondaryApi.get('', {
      params: {
        search: formattedString,
        is_last: 'True',
        place_type: 'city',
      },
    });

    if (response.data.count === 0) {
      toast.error('Por favor, digite o nome correto do município!');
    } else {
      setCities(response.data.results);
      setLoaded(1);
    }
  }

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          placeholder="Digite o nome do município corretamente, por exemplo São Paulo"
          onChange={handleInputChange}
        />
        <SearchButtonContainer onClick={handleSearchCity}>
          <MdSearch size={30} color="#fff" />
        </SearchButtonContainer>
      </InputContainer>
      {loaded && cities.map((city) => <CityCard key={city} city={city} />)}
    </Container>
  );
}

export default Cities;
