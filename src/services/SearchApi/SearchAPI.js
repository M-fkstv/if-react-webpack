import axios from 'axios';

export const getHotels = async (url) => {
  const { data: hotels } = await axios.get(url);
  return hotels;
};
