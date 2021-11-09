import axios, { AxiosInstance } from 'axios';

const $axios: AxiosInstance = axios.create({
  baseURL: 'https://api.casjay.vercel.app/api/v1/git',
});

export default $axios;
