import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-hnak.onrender.com',
  withCredentials: true,
});
