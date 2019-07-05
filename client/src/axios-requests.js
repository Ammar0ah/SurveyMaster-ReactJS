import axios from 'axios';
const instance = axios.create({
    baseURL: "https://survey-master-v1.herokuapp.com/"// "http://localhost:5000/"
})

export default instance;