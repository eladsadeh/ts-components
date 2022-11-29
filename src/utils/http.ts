import axios from 'axios'

const service = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  validateStatus: status => status >= 200 && status < 300,
});

// attempt to read and set user's access token
const accessToken = localStorage.getItem('auth/token');
service.defaults.headers.common.Authorization = accessToken ? `Bearer ${accessToken}` : '';

export default service;
