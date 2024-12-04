import { IMedia } from './IMedia';

export type MediaResponse = {
  result: {
    success: boolean;
    pageNo: number;
    totalPages: number;
    data: IMedia[];
  };
};
