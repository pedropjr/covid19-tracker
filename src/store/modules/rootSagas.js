import { all } from 'redux-saga/effects';

import application from './application/sagas';

export default function* rootSaga() {
  return yield all([application]);
}
