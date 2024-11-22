import { useEffect, useState } from 'react';
import ItemsList from './ItemsList';
import Pagination from './UI/Pagination';
import Search from './UI/Search';
import { IMedia } from '../Models/IMedia';
import { PaginationType } from '../Models/PaginationType';
import { ResponseModel } from '../Models/ResponseModel';
import { LoadMedia } from '../Utilities/LoadMedia';

export type MediaProps = {
  mediaType: 'movie' | 'show';
};
const MediaList = ({ mediaType }: MediaProps) => {
  const [media, setMedia] = useState<IMedia[]>([]);
  const [pagination, setPagination] = useState<PaginationType>();

  useEffect(() => {
    loadMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMedia = async (searchCritera?: string, page: number = 1) => {
    let result: ResponseModel;
    let url = '';

    if (mediaType === 'movie') {
      url = '/movies';
    } else {
      url = '/shows';
    }
    if (searchCritera) {
      result = await LoadMedia(
        `${url}?query=${searchCritera}&page=${page}`,
        mediaType
      );
    } else {
      result = await LoadMedia(`${url}?page=${page}`, mediaType);
    }

    setMedia(result.data);
    setPagination(result.pagination);
  };

  const handleSearch = async (criteria: string) => {
    loadMedia(criteria);
  };

  const handlePagination = async (page: number) => {
    loadMedia(undefined, page);
  };
  return (
    <>
      <Search onSearch={handleSearch} />
      <Pagination gotoPage={handlePagination} pagination={pagination!} />
      <ItemsList items={media} />
    </>
  );
};
export default MediaList;
