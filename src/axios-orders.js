import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c9dc8.firebaseio.com/'
});

export default instance;