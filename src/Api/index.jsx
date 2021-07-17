import axios from 'axios';
import { getToken } from './tokenManage';

const URL = 'http://localhost:8080';

export const Api = axios.create({
  baseURL: URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken() || ''}`,
  },
});

export const FileApi = axios.create({
  baseURL: URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${getToken() || ''}`,
  },
});

export default Api;
