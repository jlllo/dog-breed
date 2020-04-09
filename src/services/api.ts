import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br',
});

export const validateToken = async (email: string, token: string) => {
  try {
    const response = await api.post('/register', {
      email,
    });

    return response.data.user.token === token;
  } catch (err) {
    return true;
  }
};

export const setAxiosData = (token: string, breed: string) => {
  const data = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    params: {
      breed,
    },
  };

  return data;
};

export default api;
