import axios from 'axios';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

export const apiRoutes = {
  farms: '/farms',
  cropTypes: '/crop-types'
}