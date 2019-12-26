import axios from 'axios';

export const searchInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/'
});

 