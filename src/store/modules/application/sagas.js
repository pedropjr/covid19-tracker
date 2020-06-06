import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';

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

    /** Formatting Date */
    const formattedDate = format(
      parseISO(response.data.data.updated_at),
      'dd/MM/yyyy HH:mm',
      {
        locale: ptBR,
      }
    );
    /** */

    const country = {
      ...response.data.data,
      formatted_updated_at: formattedDate,
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

    /** Formatting Date */
    const formattedDate = format(
      parseISO(response.data.data[0].datetime),
      'dd/MM/yyyy HH:mm',
      {
        locale: ptBR,
      }
    );
    /** */

    yield put(
      getBrazilInfoSuccess({
        brazil: response.data.data,
        states_date: formattedDate,
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
