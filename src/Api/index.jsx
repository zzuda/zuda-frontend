import axios from 'axios';
import { getToken } from './tokenManage';

const URL = 'http://localhost:8080';

const Api = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${getToken() || ''}`,
  },
});

export default Api;