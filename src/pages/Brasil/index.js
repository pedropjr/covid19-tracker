import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';

import { Container } from './styles';
import FloatingButton from '~/components/FloatingButton';
import FloatingCities from '~/components/FloatingCities';
import BrasilTable from '~/components/BrasilTable';
import CountryCard from '~/components/CountryCard';
import {
  getCountryInfoRequest,
  getBrazilInfoRequest,
} from '~/store/modules/application/actions';

export default function Brasil() {
  const [isShowing, setIsShowing] = useState();
  const dispatch = useDispatch();
  const { loading, country, states_date } = useSelector(
    (state) => state.application
  );

  useEffect(() => {
    async function loadBrazil() {
      dispatch(getCountryInfoRequest('Brazil'));
      dispatch(getBrazilInfoRequest());
    }
    loadBrazil();
  }, [dispatch]);

  return (
    <Container loading={loading}>
      {loading ? (
        <ReactLoading type="spokes" color="#4FFA7B" height="10%" width="10%" />
      ) : (
        <>
          <CountryCard countryData={country} states_date={states_date} />
          <BrasilTable />
          <FloatingButton isShowing={isShowing} setIsShowing={setIsShowing} />
          <FloatingCities isShowing={isShowing} setIsShowing={setIsShowing} />
        </>
      )}
    </Container>
  );
}
