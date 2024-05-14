import axios from 'axios';
import cookies from '../utils/cookie';

const instance = axios?.create({
  baseURL: "https://fakestoreapi.com/",
  // timeout: 500000,
  headers: {
    Accept: 'application/json',
    "access-control-allow-origin": "*",
    'Content-Type': 'application/json',
  },
});

instance?.interceptors?.request?.use(function (config) {
  const storedToken = cookies?.get("user");
  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken?.token}` : null,
    },
  };
});

export default instance;