import axios from 'axios';

export const searchInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/'
});

export const authInstance =axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

 