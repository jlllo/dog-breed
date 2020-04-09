/* eslint-disable dot-notation */
import api from '../../src/services/api';

jest.setTimeout(10000);

describe('-> API Tests', () => {
  it('deve autenticar um email na API e retornar erro Status: 503', async () => {
    const email = 'newusername@gmail.com';

    await api.post('/register', {
      email,
    }).catch((err) => expect(err.code).toEqual(503));
  });
});

describe('-> API Tests', () => {
  it('deve autenticar um email na API, retornar Status: 200, um user contendo email e token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMDUxNTFiMC1iMzUyLTRiZjYtOTc0Ni0yMDAyOWMyMjI5YTciLCJzdWIiOiI1ZTgzNjBhM2E0YWQ1MTAwMDRlN2EwOTgiLCJpYXQiOjE1ODU2NjgyNTksImV4cCI6MTU4Njk2NDI1OX0.Ub1J_-iOdA3TkamTu6Df1fqhm-1ohqboZ0oYREmoVHg';
    const email = 'newusername@gmail.com';

    await api.post('/register', {
      email,
    }).then((response) => {
      expect(response.status).toEqual(200);
      expect(response.data.user).toEqual({
        ...response.data.user,
        email,
        token,
      });
    }).catch((err) => expect(err).toBeNull());
  });
});

