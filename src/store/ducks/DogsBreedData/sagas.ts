import { all, call, put } from 'redux-saga/effects';
import api, { setAxiosData } from '../../../services/api';
import { treatDogs } from '../../../services/dateset';
import { loadDogsChihuahua, loadDogsHusky, loadDogsLabrador, loadDogsPug, loadFailure, setAuthenticated, setToken } from './actions';
import { ApplicationState, DogsBreedData, DogsBreedDataState } from './types';

function* dogsRequest(dogs : DogsBreedData, breed: string, token: string) {
  const requestData = setAxiosData(token, breed);

  try {
    const response = yield call(api.get, '/list', requestData);

    const treatData = treatDogs(response.data.list);

    if (breed === 'husky') {
      yield put(loadDogsHusky(treatData));
    } else if (breed === 'pug') {
      yield put(loadDogsPug(treatData));
    } else if (breed === 'labrador') {
      yield put(loadDogsLabrador(treatData));
    } else {
      yield put(
        loadDogsChihuahua(treatData),
      );
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loadDogs({ dogs, breeds, token }: DogsBreedDataState) {
  yield all(breeds.map((breed) => call(dogsRequest,
    dogs, breed, token)));
}

export function* authenticate(state: ApplicationState) {
  const { email } = state.dogsBreedData;

  try {
    const response = yield call(api.post, '/register', {
      email,
    });

    const { token } = response.data.user;

    yield put(setToken(token));
    yield put(setAuthenticated(true));
    yield call(loadDogs, {
      ...state.dogsBreedData, token,
    });
  } catch (err) {
    yield put(loadFailure());
  }
}
