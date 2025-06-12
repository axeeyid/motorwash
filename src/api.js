import axios from 'axios';


const customAPI = axios.create({
  baseURL: 'http://localhost:7000/api',
});


export default customAPI;
