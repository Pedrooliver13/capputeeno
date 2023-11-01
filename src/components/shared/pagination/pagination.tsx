'use client';

// Packages
import { ReactElement, useEffect } from 'react';
import {
  CaretLeft as CaretLeftIcon,
  CaretRight as CaretRightIcon,
} from 'phosphor-react';

// Hooks
import { usePagination } from 'hooks/usePagination';

// Contexts
import { useProductContext } from 'contexts/useProductContext';

// Styles
import * as Styled from './styles';

export const Pagination = (): ReactElement => {
  const { page, totalResults, handleChangePage } = useProductContext();

  const {
    currentPage,
    lastPage,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
  } = usePagination({
    page,
    setPage: handleChangePage,
    totalResults,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <Styled.PaginationContainer className="container">
      <ul>
        {currentPage > 3 && (
          <li onClick={() => handlePageChange(page - 3)}>{currentPage - 3}</li>
        )}

        {currentPage > 2 && (
          <li onClick={() => handlePageChange(page - 2)}>{currentPage - 2}</li>
        )}

        {currentPage > 1 && (
          <li onClick={() => handlePageChange(page - 1)}>{currentPage - 1}</li>
        )}

        <li className="active">{currentPage}</li>

        {currentPage < lastPage && (
          <li onClick={() => handlePageChange(page + 1)}>{currentPage + 1}</li>
        )}

        {currentPage + 1 < lastPage && (
          <li onClick={() => handlePageChange(page + 2)}>{currentPage + 2}</li>
        )}

        {currentPage + 2 < lastPage && (
          <li onClick={() => handlePageChange(page + 3)}>{currentPage + 3}</li>
        )}

        {currentPage + 3 < lastPage && (
          <li onClick={() => handlePageChange(page + 4)}>{currentPage + 4}</li>
        )}

        <li
          className={currentPage <= 1 ? 'disabled' : ''}
          onClick={handlePrevPage}
        >
          <CaretLeftIcon />
        </li>
        <li
          className={currentPage >= lastPage ? 'disabled' : ''}
          onClick={handleNextPage}
        >
          <CaretRightIcon />
        </li>
      </ul>
    </Styled.PaginationContainer>
  );
};
