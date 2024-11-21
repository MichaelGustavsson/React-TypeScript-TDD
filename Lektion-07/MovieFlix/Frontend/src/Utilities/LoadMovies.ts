import axios from 'axios';
import { IMedia } from '../Models/IMedia';

export const LoadMovies = async (endpoint: string): Promise<IMedia[]> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.result.data;
};
