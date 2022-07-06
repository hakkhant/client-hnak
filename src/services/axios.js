import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-memory-hnak.herokuapp.com',
  withCredentials: true,
});
