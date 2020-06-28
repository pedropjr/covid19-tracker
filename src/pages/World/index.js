import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Observer from '@researchgate/react-intersection-observer';

import SkeletonCountriesList from '~/components/Skeleton/Countries';
import Input from '~/components/Input';
import CountriesList from '~/components/CountriesList';
import { getWorldInfoRequest } from '~/store/modules/application/actions';
import formatString from '~/util/formatString';

import { Container } from './styles';

function World() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { world, loading, searchInput } = useSelector(
    (state) => state.application
  );

  useEffect(() => {
    async function loadCountriesData() {
      await dispatch(getWorldInfoRequest());
    }
    loadCountriesData();
  }, [dispatch]);

  const pagedWorld = useMemo(() => {
    if (searchInput !== '') {
      setPage(1);
      return world.filter((country) =>
        country.country.includes(formatString(searchInput))
      );
    }
    const offset = (Number(page) - 1) * 16;
    return world.slice(0, offset + 16);
  }, [page, searchInput, world]);

  function handleIntersection({ isIntersecting }) {
    if (isIntersecting) {
      setTimeout(() => setPage(page + 1), 1000);
    }
  }

  return (
    <Container>
      {loading ? (
        <SkeletonCountriesList />
      ) : (
        <>
          <Input />
          <CountriesList pagedWorld={pagedWorld} />
          {!loading && pagedWorld.length !== world.length && (
            <Observer onChange={handleIntersection} threshold={1}>
              <span />
            </Observer>
          )}
        </>
      )}
    </Container>
  );
}

export default World;
