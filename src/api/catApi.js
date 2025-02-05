import axios from 'axios';

const ENDPOINT = "https://api.thecatapi.com/v1";
axios.defaults.headers.common['x-api-key'] = 'live_3PTpRFnZUt47t3q8n9V0W64WNwEodIbLy6sPNaYUkvAXIYrdq8RBOKZiR9ghreqS'

export const getBreeds = () => {
  return axios.get(`${ENDPOINT}/breeds?limit=10&page=0`).then(result => {
    return result.data;
  });
}

export const getBreedById = id => {
  return axios.get(`${ENDPOINT}/breeds/${id}`).then(result => {
    return result.data;
  });
}

export const api = {
  getBreeds, getBreedById
}

export default api
