import api from '../../src/services/api';

describe('-> API Tests', () => {
  it('deve autenticar um email na API e retornar Status: 503 Service Unavailable ', async (done) => {
    const email = 'newusername@gmail.com';

    api.post('/register', {
      email,
    }).catch((err) => {
      expect(err).toEqual(503);
    });

    done();
  });
});

describe('-> API Tests', () => {
  it('deve autenticar um email na API e retornar Status: 200, e um user contendo email e um token', async (done) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMDUxNTFiMC1iMzUyLTRiZjYtOTc0Ni0yMDAyOWMyMjI5YTciLCJzdWIiOiI1ZTgzNjBhM2E0YWQ1MTAwMDRlN2EwOTgiLCJpYXQiOjE1ODU2NjgyNTksImV4cCI6MTU4Njk2NDI1OX0.Ub1J_-iOdA3TkamTu6Df1fqhm-1ohqboZ0oYREmoVHg';
    const email = 'newusername@gmail.com';

    api.post('/register', {
      email,
    }).then((response) => {
      expect(response.status).toEqual(200);
      expect(response.data.user).toEqual({
        ...response.data.user,
        email,
        token,
      });
    });

    done();
  });
});

