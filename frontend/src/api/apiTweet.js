import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const  fetchData = async () => {
    const response = await axios.get(`${apiUrl}/tweet/tweet`);
    return response.data;
}

export const userTweets = async (id) => {
    const response = await axios.get(`${apiUrl}/tweet/tweet/${id}`);
    return response.data;
}