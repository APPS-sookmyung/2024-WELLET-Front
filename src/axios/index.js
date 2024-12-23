import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const authAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const getTokenFromCookie = () => {
  // const cookie = document.cookie
  //   .split('; ')
  //   .find((row) => row.startsWith('token='));
  // return cookie ? cookie.split('=')[1] : null;
  return dummyToken;
};

const dummyToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzODQ1NzEwNzAwIiwicm9sZSI6IlVTRVIiLCJuaWNrbmFtZSI6IuuvuOyEsSIsImlkIjozODQ1NzEwNzAwLCJleHAiOjE3MzQ5NzcwMzAsImlhdCI6MTczNDk3MzQzMCwidXNlcm5hbWUiOiJjNDNjNjA0Ni05OGE2LTQzM2ItYmE2YS00YTFmNjI0NzU2ZjcifQ.hzEbFEH400XLLvrL1GAWRU3aDdgBHBeRT59Uudcqd_22hpupwhd154Bksz-hg3k4QSNqrF4xEOVHlodqEDCiJQ';

// 요청을 보낼 때 Bearer Token을 Authorization 헤더에 추가합니다.
authAxios.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
