import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const userLogin = async (data) => {
  const response = await axios.post(`${apiUrl}/user/login`, data);
  return response.data.token;
}

export const loggedUser = async (data) => {
  const response = await axios.get(`${apiUrl}/profile/${data}`)
  return response.data;
}

export const fetchData = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`, data)

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 400) {
        console.error('Bad Request:', response.data);
      } else if (response.status === 401) {
        console.error('Unauthorized:', response.data);
      } else {
        console.error('Unexpected status code:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export const regUser = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/user/register`, data);
      if (response.status === 200) {
        return response.data.msg
      } else if (response.status === 404) {
        console.error('Bad Request:', response.data);
      } else if (response.status === 401) {
        console.error('Unauthorized:', response.data);
      } else {
        console.error('Unexpected status code:', response.status, response.data);
      }
  } catch(error) {
    console.error('Register error', error);
  }
}
