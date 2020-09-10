import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerparctice.firebaseio.com/'
});

export default instance;