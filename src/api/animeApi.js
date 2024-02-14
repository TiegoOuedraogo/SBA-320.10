import axios from 'axios';

export const fetchAnime = async (searchTerm) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`);
  return response.data; 
};

