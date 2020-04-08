import { all, select, takeEvery } from 'redux-saga/effects';
import { authenticate } from './DogsBreedData/sagas';
import { DogsBreedTypes } from './DogsBreedData/types';

export default function* rootSaga() {
  return yield all([
    takeEvery(DogsBreedTypes.SET_EMAIL, authenticate, yield select()),
  ]);
}
