import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';

import formatDate from '~/util/formatDate';

import {
  getCountryInfoSuccess,
  getWorldInfoSuccess,
  getBrazilInfoSuccess,
} from './actions';

import api from '~/services/api';

export function* getCountry({ payload }) {
  try {
    const { name } = payload;
    /** API Call */
    const response = yield call(api.get, `/api/report/v1/${name}`);
    /** */

    const country = {
      ...response.data.data,
    };

    yield put(getCountryInfoSuccess(country));
  } catch (err) {
    toast.error('Falha ao recuperar informações do país!');
  }
}

export function* getWorld() {
  try {
    const response = yield call(api.get, '/api/report/v1/countries');
    yield put(getWorldInfoSuccess(response.data.data));
  } catch (err) {
    toast.error('Falha ao recuperar informações sobre do mundo!');
  }
}

export function* getBrazil() {
  try {
    /** API Call */
    const response = yield call(api.get, '/api/report/v1');
    /** */

    yield put(
      getBrazilInfoSuccess({
        brazil: response.data.data,
        states_date: formatDate(response.data.data[0].datetime, true),
      })
    );
  } catch (err) {
    toast.error('Falha ao recuperar informações do Brasil!');
  }
}

export default all([
  takeLatest('@application/COUNTRY_REQUEST', getCountry),
  takeLatest('@application/WORLD_REQUEST', getWorld),
  takeLatest('@application/BRAZIL_REQUEST', getBrazil),
]);
