import axios from 'axios';
import { IMovie } from '../Models/IMovie';

export const FindMovie = async (endpoint: string): Promise<IMovie> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.result;
};
