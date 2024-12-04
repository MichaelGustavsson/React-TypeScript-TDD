import { ReactNode, useEffect, useState } from 'react';
import ItemsList from './ItemsList';
import Pagination from './UI/Pagination';
import Search from './UI/Search';
import { IMedia } from '../Models/IMedia';
import { PaginationType } from '../Models/PaginationType';
// import { ResponseModel } from '../Models/ResponseModel';
// import { LoadMedia } from '../Utilities/LoadMedia';
import { get } from '../Utilities/HttpClient';
import { MediaResponse } from '../Models/MediaResponse';

export type Pagination = {
  page: number;
  totalPages: number;
};

export type MediaProps = {
  mediaType: 'movies' | 'shows';
};
const MediaList = ({ mediaType }: MediaProps) => {
  const [media, setMedia] = useState<IMedia[]>([]);
  const [pagination, setPagination] = useState<PaginationType>();
  const [criteria, setCriteria] = useState<string>('');

  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL + '/' + mediaType;
    loadData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePagination = async (page: number) => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/${mediaType}?query=${criteria}&page=${page}`;

    loadData(url);
  };

  const handleSearch = async (criteria: string) => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/${mediaType}?query=${criteria}`;

    setCriteria(criteria);

    loadData(url);
  };

  const loadData = async (url: string) => {
    const response = await get<MediaResponse>(url);

    const media = response.result.data;

    const pagination: Pagination = {
      page: response.result.pageNo,
      totalPages: response.result.totalPages,
    };

    media.map((item) => {
      return (item.mediaType = mediaType);
    });

    setPagination(pagination);
    setMedia(media);
  };
  let content: ReactNode;

  if (media) {
    content = <ItemsList items={media} />;
  }
  return (
    <>
      <Search onSearch={handleSearch} />
      <Pagination gotoPage={handlePagination} pagination={pagination!} />
      {content}
    </>
  );
};
export default MediaList;
