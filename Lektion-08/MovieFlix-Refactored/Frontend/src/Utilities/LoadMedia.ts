import axios from 'axios';
import { ResponseModel } from '../Models/ResponseModel';
import { IMedia } from '../Models/IMedia';

export const LoadMedia = async (
  endpoint: string,
  type: string
): Promise<ResponseModel> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

  const mediaList: IMedia[] = [];

  result.data.result.data.map((item: IMedia) => {
    const { id, title, posterImage, releaseDate }: IMedia = item;
    const media: IMedia = {
      id,
      title,
      posterImage,
      releaseDate,
      mediaType: type === 'movie' ? 'movie' : 'show',
    };

    mediaList.push(media);
  });

  const response = new ResponseModel(
    mediaList,
    result.data.result.pageNo,
    result.data.result.totalPages
  );

  return response;
};
