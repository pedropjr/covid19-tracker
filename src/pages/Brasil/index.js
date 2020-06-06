import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';

import { Container } from './styles';
import BrasilTable from '~/components/BrasilTable';
import CountryCard from '~/components/CountryCard';
import {
  getCountryInfoRequest,
  getBrazilInfoRequest,
} from '~/store/modules/application/actions';

export default function Brasil() {
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
    <Container>
      {loading ? (
        <ReactLoading type="spokes" color="#4FFA7B" height="10%" width="10%" />
      ) : (
        <>
          <CountryCard countryData={country} states_date={states_date} />
          <BrasilTable />
        </>
      )}
    </Container>
  );
}
