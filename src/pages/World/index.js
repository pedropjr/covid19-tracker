import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageContainer from '~/components/PageContainer';
import CountriesList from '~/components/CountriesList';
import { getWorldInfoRequest } from '~/store/modules/application/actions';

import { Container } from './styles';

function World() {
  const [page, setPage] = useState(1);
  const [pagedWorld, setPagedWorld] = useState([]);
  const dispatch = useDispatch();
  const { world } = useSelector((state) => state.application);
  const { loading } = useSelector((state) => state.application);

  useEffect(() => {
    async function loadCountriesData() {
      dispatch(getWorldInfoRequest());
    }
    loadCountriesData();
  }, [dispatch]);

  useEffect(() => {
    const offset = (Number(page) - 1) * 16;
    setPagedWorld(world.slice(offset, offset + 16));
    window.scrollTo(0, 0);
  }, [page, world]);

  /**  function handleInputChange(event) {
    setPagedWorld([]);
    // eslint-disable-next-line array-callback-return
    world.map((country) => {
      const isIncluded = country.country.includes(event.target.value);
      if (isIncluded) {
        setPagedWorld(...pagedWorld, country);
      }
    });
  } */

  return (
    <Container>
      <CountriesList loading={loading} pagedWorld={pagedWorld} />
      <PageContainer
        setPage={setPage}
        page={page}
        length={pagedWorld.length}
        loading={loading}
      />
    </Container>
  );
}

export default World;
