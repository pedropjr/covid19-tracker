import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getBrazilInfoSuccess, getWorldInfoSuccess } from './actions';

import api from '~/services/api';

export function* getBrazil() {
  try {
    const responseStates = yield call(api.get, '/api/report/v1');
    const responseBrazil = yield call(api.get, '/api/report/v1/brazil');

    yield put(
      getBrazilInfoSuccess({
        states: responseStates.data.data,
        brazil: responseBrazil.data.data,
      })
    );
  } catch (err) {
    toast.error('Falha ao recuperar informações sobre o Brasil do servidor!');
  }
}

export function* getWorld() {
  try {
    const response = yield call(api.get, '/api/report/v1/countries');
    yield put(getWorldInfoSuccess(response.data.data));
  } catch (err) {
    toast.error('Falha ao recuperar informações sobre o mundo do servidor!');
  }
}

export default all([
  takeLatest('@application/BRAZIL_REQUEST', getBrazil),
  takeLatest('@application/WORLD_REQUEST', getWorld),
]);
