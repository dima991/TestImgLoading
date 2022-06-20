import api from '../utils/api';

export const getRandomImage = async () => {
  return await api.get('/photos/random');
};
