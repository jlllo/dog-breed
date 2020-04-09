import * as actions from '../../src/store/ducks/DogsBreedData/actions';
import { DogsBreedTypes } from '../../src/store/ducks/DogsBreedData/types';

describe('-> Redux Actions Tests', () => {
  it('setEmail() deve criar uma action que salva um e-mail no estado global da aplicação', () => {
    const email = 'newusername@gmail.com';
    const expectedAction = {
      type: DogsBreedTypes.SET_EMAIL,
      payload: email,
    };
    expect(actions.setEmail(email)).toEqual(expectedAction);
  });
});

describe('-> Redux Actions Tests', () => {
  it('setToken() deve criar uma action que salva um token no estado global da aplicação', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMDUxNTFiMC1iMzUyLTRiZjYtOTc0Ni0yMDAyOWMyMjI5YTciLCJzdWIiOiI1ZTgzNjBhM2E0YWQ1MTAwMDRlN2EwOTgiLCJpYXQiOjE1ODU2NjgyNTksImV4cCI6MTU4Njk2NDI1OX0.Ub1J_-iOdA3TkamTu6Df1fqhm-1ohqboZ0oYREmoVHg';
    const expectedAction = {
      type: DogsBreedTypes.SET_TOKEN,
      payload: token,
    };
    expect(actions.setToken(token)).toEqual(expectedAction);
  });
});

describe('-> Redux Actions Tests', () => {
  it('setMessage() deve criar uma action que salva uma mensagem no estado global da aplicação', () => {
    const message = {
      theme: 'warning',
      title: 'Warning',
      subtitle: 'API is not responding.',
      show: false,
    };

    const expectedAction = {
      type: DogsBreedTypes.SET_MESSAGE,
      payload: message,
    };
    expect(actions.setMessage(message)).toEqual(expectedAction);
  });
});

describe('-> Redux Actions Tests', () => {
  it('setShowMessage() deve criar uma action que salva o estado de carregamento da aplicação', () => {
    const show = true;

    const expectedAction = {
      type: DogsBreedTypes.SET_SHOW_MESSAGE,
      payload: show,
    };
    expect(actions.setShowMessage(show)).toEqual(expectedAction);
  });
});

describe('-> Redux Actions Tests', () => {
  it('setLoading() deve criar uma action que salva o estado de carregamento da aplicação', () => {
    const loading = true;
    const expectedAction = {
      type: DogsBreedTypes.SET_LOADING,
      payload: loading,
    };
    expect(actions.setLoading(loading)).toEqual(expectedAction);
  });
});
