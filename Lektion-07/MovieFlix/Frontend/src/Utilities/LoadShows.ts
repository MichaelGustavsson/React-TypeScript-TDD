import axios from 'axios';
import { IShow } from '../Models/IShow';

export const LoadShows = async (endpoint: string): Promise<IShow[]> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.result.data;
};
