import axios from 'axios';
import { IMediaDetails } from '../Models/IMediaDetails';

export const FindShow = async (endpoint: string): Promise<IMediaDetails> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  return result.data.result;
};
