const ENDPOINT = "https://api.thecatapi.com/v1";

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] = 'live_3PTpRFnZUt47t3q8n9V0W64WNwEodIbLy6sPNaYUkvAXIYrdq8RBOKZiR9ghreqS'

import { createCat } from '@/api/cat.js';

export const getBreeds = ({ page = 0, limit = 1000 } = {}) => {
  return axios.get(`${ENDPOINT}/breeds?page=${page}&limit=${limit}`).then(result => {
    return result.data.map(createCat);
  });
}

export const getBreedById = id => {
  return axios.get(`${ENDPOINT}/breeds/${id}`).then(result=> {
    return createCat(result.data);
  });
}

export const api = {
  getBreeds, getBreedById
}

export default api
