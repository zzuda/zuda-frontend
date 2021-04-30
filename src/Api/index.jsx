import axios from 'axios';

const URL = 'http://localhost:8080';

const Api = axios.create({
  baseURL: URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});

export default Api;
