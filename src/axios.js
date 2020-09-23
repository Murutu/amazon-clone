import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-82441.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-82441/us-central1/api'
});

export default instance;

