import axios from 'axios';
import {BASE_URL} from './urls';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.request.use(
  async function (config) {
    config.params = {
      ...config.params,
    };
    return config;
  },
  function (eror) {
    return Promise.reject(eror);
  },
);
export {axiosClient};
