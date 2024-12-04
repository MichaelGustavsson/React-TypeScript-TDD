import { PaginationType } from '../../Models/PaginationType';

type PaginationProps = {
  gotoPage: (pageNo: number) => void;
  pagination: PaginationType;
};

const Pagination = ({ gotoPage, pagination }: PaginationProps) => {
  const handleFirstPage = () => gotoPage(1);

  const handlePrevPage = () => {
    if (pagination.page > 0) gotoPage(pagination.page - 1);
  };

  const handleNextPage = () => {
    if (pagination.page < pagination.totalPages) gotoPage(pagination.page + 1);
  };

  const handleLastPage = () => {
    if (pagination.totalPages > 500) {
      gotoPage(500);
      return;
    }

    gotoPage(pagination.totalPages);
  };

  return (
    <div className='pagination'>
      <button onClick={handleFirstPage}>
        <i className='fa-solid fa-backward-step'></i>
      </button>
      <button onClick={handlePrevPage}>
        <i className='fa-solid fa-play fa-rotate-180'></i>
      </button>
      <span>Sidan {pagination?.page}</span>
      <span>Av {pagination?.totalPages}</span>
      <button onClick={handleNextPage}>
        <i className='fa-solid fa-play'></i>
      </button>
      <button onClick={handleLastPage}>
        <i className='fa-solid fa-forward-step'></i>
      </button>
    </div>
  );
};
export default Pagination;
