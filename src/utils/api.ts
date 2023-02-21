import axios, { AxiosRequestConfig } from 'axios';

const CONFIG: AxiosRequestConfig = { withCredentials: true };

const API_URL = 'http://localhost:3000'

export const getAuthStatus = () =>
  axios.get(`${API_URL}/auth/github/status`, CONFIG);

export const getUserByUsername = (username: string) =>
  axios.get(`${API_URL}/users/` + username);
