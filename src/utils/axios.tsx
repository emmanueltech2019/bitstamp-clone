import axios from 'axios';

const instance = axios.create({
  // baseURL: `http://localhost:4000/api/v1`
  baseURL:`https://mirror.chidefashion.com/api/v1`
});

export default instance;