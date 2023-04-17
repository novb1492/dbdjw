import axios from 'axios';
import { consoleLog } from '../assets/jsLib';

export  function setInterceptors(instance)  {
    instance.interceptors.request.use(
      (config) => {
        config.withCredentials=true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    // Add a response interceptor
     instance.interceptors.response.use(
      (response) => {
        // consoleLog(response);
        return response;
      },
      (error) => {
        // consoleLog(error);
        return Promise.reject(error);
      },
    );
  
    return instance;
  }
  export const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': "application/json",
    }
  
  });