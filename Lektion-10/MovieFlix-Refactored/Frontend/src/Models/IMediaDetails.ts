import { Genre } from './Genre';
import { IMedia } from './IMedia';

export interface IMediaDetails extends IMedia {
  backgroundImage: string;
  overview: string;
  runtime: number;
  grade: number;
  genre: Genre[];
}
