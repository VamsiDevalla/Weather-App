import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.ACCU_WEATHER_BASE_URL}`,
});
export default instance;
